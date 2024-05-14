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
    const motionY = useMotionValue(0)
    const { scrollYProgress } = useScroll({
        container: scrollRef,
    })
    const touchScreenReloadScale = useTransform(motionY, [0, 100], [0, 1])
    const touchScreenReloadOpacity = useTransform(motionY, [0, 100], [0, 1])
    const [scrollHeight, setScrollHeight] = useState<number>(0)
    const reloadScrollHeightRef = useRef<number | null>(null)
    const loadRef = useRef<HTMLDivElement | null>(null)
    const [showLoad, setShowLoad] = useState<boolean>(false);
    const [childrenSize, setChildrenSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    })
    const showLoadCallback = useCallback<(node: boolean) => void>((node) => {
        setShowLoad(node);
    }, [showLoad]);
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
        if (touchScreen && !isReloading) {
            reloadScrollHeightRef.current = null
            motionY.animation?.play()
        }
    }, [isReloading])

    useEffect(() => {
        if (isReloading || !isLoading) {
            showLoadCallback(false);
        }
    }, [isLoading, isReloading])

    useEffect(() => {
        setScrollHeight(childrenSize.height + loadingHeight)
    }, [childrenSize, size])

    touchScreenReloadScale.on('change', (value) => {
        if (value >= 1 && reloadScrollHeightRef.current === null) {
            reloadScrollHeightRef.current = motionY.get()
        }
    })

    motionY.on('change', (value) => {
        onDrag?.(value, scrollRef, contentRef)

        if (
            reloadScrollHeightRef.current &&
            value <= reloadScrollHeightRef.current
        ) {
            motionY.animation?.pause()
            onReload?.()
        }

        if (
            isReloading &&
            reloadScrollHeightRef.current &&
            value >= reloadScrollHeightRef.current
        ) {
            motionY.animation?.play()
        }

        const bottom = (contentRef.current?.getBoundingClientRect().height ?? 0) - (scrollRef.current?.getBoundingClientRect().height ?? 0)
        if (motionY.hasAnimated && value <= -bottom) {
            showLoadCallback(true);
        }
    })

    scrollYProgress.on('change', (value) => {
        onScroll?.(value, scrollRef, contentRef)

        if (value >= 1) {
            showLoadCallback(true);
        }
    })

    return (
        <div ref={rootRef} className={[styles['root'], classNames?.root].join(' ')}>
            {!touchScreen && (
                <>
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
                                height: scrollHeight,
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
                                        ref={loadRef}
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
                </>
            )}
            {touchScreen && (
                <>
                    <motion.div
                        className={[
                            styles['reload-container'],
                            classNames?.reloadContainer,
                        ].join(' ')}
                        style={{
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                            width: '100%',
                            scale: touchScreenReloadScale,
                            opacity: touchScreenReloadOpacity,
                        }}
                    >
                        {reloadComponent}
                    </motion.div>
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
                            transform: 'translateZ(0)',
                            cursor: 'grab',
                        }}
                        whileTap={{ cursor: 'grabbing' }}
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
                                height: scrollHeight,
                                y: motionY,
                            }}
                            drag="y"
                            dragConstraints={{
                                top: -scrollHeight + (scrollRef.current?.clientHeight ?? 0),
                                bottom: 0,
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
                                        ref={loadRef}
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
                </>
            )}
        </div>
    )
}

export default Scroll
