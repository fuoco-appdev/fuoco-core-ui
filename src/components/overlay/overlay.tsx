import React, { useEffect, useLayoutEffect, useState } from 'react'
import { RipplesProps } from 'react-ripples'
import { animated, useSpring } from 'react-spring'
import { Button } from '../button'
import { Close } from '../icon/icons/line'

// @ts-ignore
import styles from './overlay.module.scss'
import { ButtonClasses } from '../button/button'

export interface OverlayClasses {
  animatedContent?: string
  exitButtonRoot?: string
  exitButton?: ButtonClasses
  background?: string
}

export interface OverlayProps {
  classNames?: OverlayClasses
  touchScreen?: boolean
  anchorRef?: React.RefObject<any>
  visible?: boolean
  children?: React.ReactElement[] | React.ReactElement
  hideCloseButton?: boolean
  closeRippleProps?: RipplesProps
  closeIconColor?: string
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Overlay({
  classNames,
  anchorRef,
  touchScreen,
  visible,
  children,
  hideCloseButton = false,
  closeRippleProps,
  closeIconColor = '#000',
  onClose,
}: OverlayProps) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight)

  const [style, api] = useSpring(() => ({
    from: {
      opacity: 0,
      ...(!anchorRef && { transform: 'translate(-50%, -50%)' }),
      left: anchorRef
        ? anchorRef?.current?.getBoundingClientRect().left
        : '50%',
      top: anchorRef ? anchorRef?.current?.getBoundingClientRect().top : '50%',
      height: anchorRef?.current?.clientHeight ?? 0,
      width: anchorRef?.current?.clientWidth ?? 0,
      borderRadius: 0,
      zIndex: -1,
    },
    to: {
      opacity: 1,
      ...(!anchorRef && { transform: 'translate(-50%, -50%)' }),
      top: anchorRef ? 0 : '50%',
      left: anchorRef ? 0 : '50%',
      height: window.innerHeight,
      width: window.innerWidth,
      borderRadius: 0,
      zIndex: 1000,
    },
    config: {
      tension: 1000,
      friction: 50,
      bounce: 0,
    },
  }))

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useLayoutEffect(() => {
    let borderRadius: string | null = null
    if (anchorRef?.current) {
      borderRadius = window
        .getComputedStyle(anchorRef?.current)
        .getPropertyValue('border-radius')
        .replace(/[^\d.]/g, '')
    }

    api.start({
      opacity: visible ? 1 : 0,
      ...(!anchorRef && { transform: 'translate(-50%, -50%)' }),
      left: visible
        ? 0
        : anchorRef
        ? anchorRef?.current?.getBoundingClientRect().left
        : '50%',
      top: visible
        ? 0
        : anchorRef
        ? anchorRef?.current?.getBoundingClientRect().top
        : '50%',
      height: visible ? windowHeight : anchorRef?.current?.clientHeight ?? 0,
      width: visible ? windowWidth : anchorRef?.current?.clientWidth ?? 0,
      borderRadius: visible ? 0 : Number(borderRadius ?? 0),
      zIndex: visible ? 1000 : -1,
    })
  }, [visible, windowWidth, windowHeight])

  return (
    <animated.div
      style={style}
      className={[styles['animated-content'], classNames?.animatedContent].join(
        ' '
      )}
    >
      <div
        className={[styles['background'], classNames?.background].join(' ')}
      />
      {!hideCloseButton && (
        <div
          className={[
            styles['exit-button-root'],
            classNames?.exitButtonRoot,
          ].join(' ')}
        >
          <Button
            classNames={{
              container: styles['exit-button-container'],
              button: styles['exit-button'],
              ...classNames?.exitButton,
            }}
            touchScreen={touchScreen}
            icon={<Close stroke={closeIconColor} />}
            type={'text'}
            size={'small'}
            onClick={onClose}
            rippleProps={closeRippleProps}
          />
        </div>
      )}
      {children}
    </animated.div>
  )
}

export default Overlay
