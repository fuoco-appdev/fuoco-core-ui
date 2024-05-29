import {
    MotionValue,
    motion,
    useScroll,
    useMotionValue,
    useTransform,
    AnimatePresence,
    useMotionValueEvent,
} from 'framer-motion'
// @ts-ignore
import styles from './scroll.module.scss'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { renderToString } from 'react-dom/server';

export interface ScrollProps {
    classNames?: ScrollClasses
    touchScreen?: boolean
    children?: JSX.Element
    reloadComponent?: JSX.Element
    pullIndicatorComponent?: JSX.Element
    loadComponent?: JSX.Element
    loadingHeight?: number
    reloadThreshold?: number
    showIndicatorThreshold?: number
    isReloadable?: boolean
    isLoadable?: boolean
    isReloading?: boolean
    isLoading?: boolean
    onReload?: () => void
    onLoad?: () => void
    onScroll?: (
        progress: number,
        scrollRef: React.RefObject<HTMLDivElement>,
        contentRef: React.RefObject<HTMLDivElement>
    ) => void
}

export interface ScrollClasses {
    root?: string
    reloadContainer?: string
    scrollContainer?: string
    scrollContent?: string
    children?: string
    loadContainer?: string
    pullIndicator?: string
}

function Scroll({
    classNames,
    touchScreen,
    children,
    reloadComponent,
    pullIndicatorComponent,
    loadComponent,
    loadingHeight = 40,
    reloadThreshold = 56,
    showIndicatorThreshold = 24,
    isReloadable = true,
    isLoadable = true,
    isReloading,
    isLoading,
    onReload,
    onLoad,
    onScroll,
}: ScrollProps) {
    const rootRef = useRef<HTMLDivElement | null>(null)
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const childrenRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        container: scrollRef,
    })
    const [scrollHeight, setScrollHeight] = useState<number>(0)
    const [showLoad, setShowLoad] = useState<boolean>(false);
    const [childrenSize, setChildrenSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    })

    const observer = useMemo(
        () =>
            new ResizeObserver((entries) => {
                const rect = entries[0].target.getBoundingClientRect();
                setChildrenSize({ width: rect.width ?? 0, height: rect.height ?? 0 });
            }),
        []
    );

    const showLoadCallback = useCallback<(node: boolean) => void>((node) => {
        if (showLoad !== node) {
            setShowLoad(node);
        }
    }, [showLoad]);


    const childrenCallbackRef = useCallback<(node: HTMLDivElement | null) => void>(
        (node) => {
            if (node !== null) {
                childrenRef.current = node;
                observer.observe(node);
            } else {
                observer.unobserve(childrenRef.current as Element);
                childrenRef.current = null;
            }
        },
        [observer]
    );
    const [size, setSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    })

    const handleResize = () => {
        setSize({
            height: window.innerHeight,
            width: window.innerWidth,
        })
    }

    const MAX = 128;
    const k = 0.4;
    const appr = (x: number) => {
        return MAX * (1 - Math.exp((-k * x) / MAX));
    }

    const addPullIndicator = (el: HTMLDivElement) => {
        const indicator = el.querySelector(`.${styles["pull-indicator"]}`);
        if (indicator) {
            // already added

            // make sure the arrow is not flipped
            if (indicator.classList.contains(styles["flip"])) {
                indicator.classList.remove(styles["flip"]);
            }
            return;
        }

        const pullIndicator = document.createElement("div");
        pullIndicator.className = [styles["pull-indicator"], classNames?.pullIndicator].join(' ');
        pullIndicator.innerHTML = pullIndicatorComponent ? renderToString(pullIndicatorComponent) : '';
        el.appendChild(pullIndicator);
    }

    const removePullIndicator = (el: HTMLDivElement) => {
        const pullIndicator = el.querySelector(`.${styles['pull-indicator']}`);
        if (pullIndicator) {
            pullIndicator.remove();
        }
    }

    const flipArrow = (el: HTMLDivElement) => {
        const pullIndicator = el.querySelector(`.${styles['pull-indicator']}`);
        if (pullIndicator && !pullIndicator.classList.contains(styles["flip"])) {
            pullIndicator.classList.add(styles["flip"]);
        }
    }

    const handleTouchStart = (startEvent: TouchEvent) => {
        const el = contentRef.current;
        if (!el || !isReloadable) return;

        // get the initial Y position
        const initialY = startEvent.touches[0].clientY;

        const onTransitionEnd = () => {
            // remove transition
            el.style.transition = "";

            // cleanup
            el.removeEventListener("transitionend", onTransitionEnd);
        }

        const handleTouchMove = (moveEvent: TouchEvent) => {
            if (!isReloadable) {
                return;
            }

            // get the current Y position
            const currentY = moveEvent.touches[0].clientY;

            // get the difference
            const dy = currentY - initialY;

            if (dy < 0) return;

            const parentEl = scrollRef.current as HTMLDivElement;
            if (dy > reloadThreshold) {
                flipArrow(parentEl);
            } else if (dy > showIndicatorThreshold) {
                addPullIndicator(parentEl);
            } else {
                removePullIndicator(parentEl);
            }

            // now we are using the `appr` function
            el.style.transform = `translateY(${appr(dy)}px)`;
        }

        const handleTouchEnd = (endEvent: TouchEvent) => {
            if (!isReloadable) {
                return;
            }

            // return the element to its initial position
            el.style.transform = "translateY(0)";
            removePullIndicator(el.parentNode as HTMLDivElement);

            // add transition
            el.style.transition = "transform 150ms";

            // run the callback
            const y = endEvent.changedTouches[0].clientY;
            const dy = y - initialY;
            if (dy > reloadThreshold) {
                onReload?.();
            }

            // listen for transition end event
            el.addEventListener("transitionend", onTransitionEnd);

            // cleanup
            el.removeEventListener("touchmove", handleTouchMove);
            el.removeEventListener("touchend", handleTouchEnd);
        }

        el.addEventListener("touchmove", handleTouchMove);
        el.addEventListener("touchend", handleTouchEnd);
    }

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;

        // attach the event listener
        el.addEventListener("touchstart", handleTouchStart);

        return () => {
            // let's not forget to cleanup
            el.removeEventListener("touchstart", handleTouchStart);
        };
    }, [contentRef.current]);

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        const height = childrenSize.height + loadingHeight;
        setScrollHeight(height)
    }, [childrenSize, size])

    useEffect(() => {
        if (!contentRef.current) {
            return;
        }

        const existingLoader = contentRef.current.querySelector(`.${styles['load-container']}`);
        if (existingLoader && !isLoading) {
            setShowLoad(false);
        }
    }, [isLoading, contentRef.current]);

    scrollYProgress.on('change', (value) => {
        if (value >= 0 && value <= 1) {
            onScroll?.(value, scrollRef, contentRef)
        }

        if (!contentRef.current || !rootRef.current) {
            return;
        }

        const rootHeight = rootRef.current?.getBoundingClientRect().height ?? 0;
        const existingLoader = contentRef.current?.querySelector(`.${styles['load-container']}`);
        if (isLoadable && !existingLoader && scrollHeight > rootHeight && value >= 1) {
            showLoadCallback(true);
        }
    })

    return (
        <div ref={rootRef} className={[styles['root'], classNames?.root].join(' ')}>
            <motion.div
                ref={scrollRef}
                className={[
                    styles['scroll-container'],
                    classNames?.scrollContainer,
                ].join(' ')}
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                    overflowY: 'auto',
                    overscrollBehavior: 'none'
                }}
            >
                <AnimatePresence>
                    {isReloadable && isReloading && (
                        <motion.div
                            className={[
                                styles['reload-container'],
                                classNames?.reloadContainer,
                            ].join(' ')}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            style={{
                                padding: 16,
                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: 'center',
                                width: '100%',
                            }}
                        >
                            {reloadComponent}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    ref={contentRef}
                    className={[
                        styles['scroll-content'],
                        classNames?.scrollContent,
                    ].join(' ')}
                    style={{
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <motion.div
                        ref={childrenCallbackRef}
                        className={[styles['children'], classNames?.children].join(' ')}
                    >
                        {children}
                    </motion.div>
                    <AnimatePresence>
                        {isLoadable && showLoad && (
                            <motion.div
                                className={[
                                    styles['load-container'],
                                    classNames?.loadContainer,
                                ].join(' ')}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                onAnimationComplete={() => onLoad?.()}
                            >
                                {loadComponent}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Scroll
