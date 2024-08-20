import React, { useEffect, useLayoutEffect, useState } from 'react'
import { RipplesProps } from 'react-ripples'
import { animated, useSpring } from 'react-spring'
import { Button } from '../button'
import { Close } from '../icon/icons/line'

// @ts-ignore
import styles from './overlay.module.scss'
import { ButtonClasses } from '../button/button'

export interface OverlayClasses {
  root?: string
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
  return (
    <div className={[styles['root'], classNames?.root].join(' ')}>
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
    </div>
  )
}

export default Overlay
