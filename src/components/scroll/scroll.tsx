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

export interface ScrollProps {
    classNames?: ScrollClasses
    touchScreen?: boolean
    children?: JSX.Element
    reloadComponent?: JSX.Element
    loadComponent?: JSX.Element
    loadingHeight?: number
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
    onDrag?: (
        top: number,
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
}

function Scroll({
    classNames,
    touchScreen,
    children,
    reloadComponent,
    loadComponent,
    loadingHeight = 40,
    isLoadable = true,
    isReloading,
    isLoading,
    onReload,
    onLoad,
    onScroll,
    onDrag,
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
    const [showReload, setShowReload] = useState<boolean>(false);
    const [childrenSize, setChildrenSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    })
    const showLoadCallback = useCallback<(node: boolean) => void>((node) => {
        if (isLoadable) {
            setShowLoad(node);
        }
    }, [showLoad, isLoadable]);

    const observer = useMemo(
        () =>
            new ResizeObserver((entries) => {
                const rect = entries[0].target.getBoundingClientRect();
                setChildrenSize({ width: rect.width ?? 0, height: rect.height ?? 0 });
            }),
        []
    );

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

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (isLoadable && isReloading || !isLoading) {
            showLoadCallback(false);
        }
    }, [isLoading, isReloading])

    useEffect(() => {
        const height = childrenSize.height + loadingHeight;
        setScrollHeight(height)
    }, [childrenSize, size])

    scrollYProgress.on('change', (value) => {
        onScroll?.(value, scrollRef, contentRef)

        const rootHeight = rootRef.current?.getBoundingClientRect().height ?? 0;
        if (scrollHeight >= rootHeight && value >= 1) {
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
                }}
            >
                <motion.div
                    ref={contentRef}
                    className={[
                        styles['scroll-content'],
                        classNames?.scrollContent,
                    ].join(' ')}
                    style={{
                        position: 'relative',
                        width: '100%',
                        //height: scrollHeight,
                    }}
                >
                    <motion.div
                        ref={childrenCallbackRef}
                        className={[styles['children'], classNames?.children].join(' ')}
                    >
                        {children}
                    </motion.div>
                    <AnimatePresence>
                        {showLoad && (
                            <motion.div
                                className={[
                                    styles['load-container'],
                                    classNames?.loadContainer,
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
