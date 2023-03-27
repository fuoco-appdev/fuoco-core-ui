import React, { useLayoutEffect } from 'react'
import { RipplesProps } from 'react-ripples'
import { animated, useSpring } from 'react-spring'
import { Button } from '../button'
import { Close } from '../icon/icons/line'

// @ts-ignore
import styles from './overlay.module.scss'

export interface OverlayProps {
  classNames?: {
    animatedContent?: string
    exitButtonRoot?: string
    exitButtonContainer?: string
    exitButton?: string
  }
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
      zIndex: 24,
    },
    config: {
      tension: 1000,
      friction: 50,
      bounce: 0,
    },
  }))

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
      height: visible
        ? window.innerHeight
        : anchorRef?.current?.clientHeight ?? 0,
      width: visible ? window.innerWidth : anchorRef?.current?.clientWidth ?? 0,
      borderRadius: visible ? 0 : Number(borderRadius ?? 0),
      zIndex: visible ? 24 : -1,
    })
  }, [visible])

  return (
    <animated.div
      style={style}
      className={[styles['animated-content'], classNames?.animatedContent].join(
        ' '
      )}
    >
      <div className={styles['background']} />
      {!hideCloseButton && (
        <div
          className={[
            styles['exit-button-root'],
            classNames?.exitButtonRoot,
          ].join(' ')}
        >
          <Button
            classNames={{
              container: [
                styles['exit-button-container'],
                classNames?.exitButtonContainer,
              ].join(' '),
              button: [styles['exit-button'], classNames?.exitButton].join(' '),
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
