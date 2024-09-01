import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { animated, config, useSpring, useTransition } from 'react-spring'
import { Button } from '../button/index'

// @ts-ignore
import DropdownStyles from './dropdown.module.scss'
import { useDrag } from '@use-gesture/react'
import { ButtonClasses } from '../button/button'
import { RipplesProps } from 'react-ripples'
import { Typography } from '../typography'

export enum DropdownAlignment {
  Left,
  Center,
  Right,
}

export interface DropdownProps {
  id?: string
  classNames?: DropdownClasses
  align?: DropdownAlignment
  dropThresholdPercent?: number
  open?: boolean
  touchScreen?: boolean
  title?: string | JSX.Element
  anchorRef?: React.RefObject<HTMLElement>
  onOpen?: () => void
  onClose?: () => void
  children?: React.ReactNode
  style?: React.CSSProperties
}

export interface DropdownClasses {
  touchscreenAnimatedOverlay?: string
  touchscreenOverlay?: string
  dropdown?: string
  touchscreenDropdown?: string
  touchscreenAnimatedContainer?: string
  touchscreenDropdownBar?: string
  touchscreenDropdownHandleContainer?: string
  touchscreenDropdownHandle?: string
  touchscreenDropdownTitle?: string
  touchscreenDropdownContent?: string
}

function Dropdown({
  id,
  classNames,
  align = DropdownAlignment.Right,
  dropThresholdPercent = 60,
  open,
  title,
  touchScreen = false,
  anchorRef,
  onOpen,
  onClose,
  children,
  style,
}: DropdownProps) {
  const parentRef = useRef<HTMLDivElement | null>(null)
  const divRef = useRef<HTMLDivElement | null>(null)
  const barRef = useRef<HTMLDivElement | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const handleTouchStart = (startEvent: TouchEvent) => {
    const contentEl = contentRef.current
    const divEl = divRef.current
    const dropdownEl = dropdownRef.current
    if (!contentEl || !divEl || !dropdownEl) return

    // get the initial Y position
    const initialY = startEvent.touches[0].clientY

    const onTransitionEnd = () => {
      // remove transition
      divEl.style.transition = ''

      // cleanup
      divEl.removeEventListener('transitionend', onTransitionEnd)
    }

    const handleTouchMove = (moveEvent: TouchEvent) => {
      // get the current Y position
      const currentY = moveEvent.touches[0].clientY

      // get the difference
      const dy = currentY - initialY

      if (dy < 0) return

      if (dropdownEl.scrollTop <= 0) {
        divEl.style.transition = ''
        divEl.style.transform = `translateY(${dy}px)`
      }
    }

    const handleTouchEnd = (endEvent: TouchEvent) => {
      if (dropdownEl.scrollTop <= 0) {
        // add transition
        divEl.style.transition = 'transform'
        divEl.style.transform = `translateY(0)`

        // run the callback
        const y = endEvent.changedTouches[0].clientY
        const dy = y - initialY
        const dropThreshold =
          (dropdownEl.clientHeight * (100 - dropThresholdPercent)) / 100
        if (dy > dropThreshold) {
          onClose?.()
        }
      }

      // listen for transition end event
      divEl.addEventListener('transitionend', onTransitionEnd)

      // cleanup
      divEl.removeEventListener('touchmove', handleTouchMove)
      divEl.removeEventListener('touchend', handleTouchEnd)
    }

    divEl.addEventListener('touchmove', handleTouchMove)
    divEl.addEventListener('touchend', handleTouchEnd)
  }

  useEffect(() => {
    const parentEl = parentRef.current
    const divEl = divRef.current
    const contentEl = contentRef.current
    const anchorEl = anchorRef?.current
    if (!divEl || !contentEl || !parentEl) return

    if (touchScreen) {
      if (open) {
        setTimeout(() => {
          divEl.style.transform = `translateY(0)`
        }, 150)
        // attach the event listener
        contentEl.addEventListener('touchstart', handleTouchStart)
      }
    } else {
      if (!anchorEl) {
        return
      }

      if (open) {
        const parentRect = parentEl?.getBoundingClientRect()
        const anchorRect = anchorEl?.getBoundingClientRect()
        const divRect = divEl?.getBoundingClientRect()
        const parentHeight = parentRect?.height ?? 0
        const parentWidth = parentRect.width ?? 0
        const anchorY = anchorRect?.y ?? 0
        const anchorX = anchorRect?.x ?? 0
        const anchorHeight = anchorRect?.height ?? 0
        const dropdownHeight = divRect?.height ?? 0
        const anchorWidth = anchorRect.width ?? 0

        let originX = '0'
        let originY = '0'
        if (anchorY > parentHeight / 2) {
          originY = '100%'
          divEl.style.bottom = `${parentHeight - (anchorY - dropdownHeight)}px`
        } else {
          originY = '0'
          divEl.style.top = `${anchorY + anchorHeight}px`
        }

        if (align === DropdownAlignment.Left) {
          divEl.style.left = `${anchorX}px`
          originX = '0'
        } else if (align === DropdownAlignment.Right) {
          divEl.style.right = `${parentWidth - anchorX - anchorWidth}px`
          originX = '100%'
        } else if (align === DropdownAlignment.Center) {
          divEl.style.left = `${anchorX}px`
          originX = '50%'
        }

        divEl.style.transformOrigin = `${originX} ${originY}`

        setTimeout(() => {
          divEl.style.scale = '1'
          divEl.style.opacity = '1'
        }, 75)

        onOpen?.()
      } else {
        onClose?.()
      }
    }

    return () => {
      if (touchScreen) {
        // let's not forget to cleanup
        contentEl.removeEventListener('touchstart', handleTouchStart)
      }
    }
  }, [divRef.current, contentRef.current, parentRef.current, open, children])

  if (!touchScreen) {
    return open ? (
      <div
        ref={parentRef}
        className={[
          DropdownStyles['overlay'],
          classNames?.touchscreenAnimatedOverlay,
        ].join(' ')}
        onClick={() => {
          divRef.current!.style.scale = `0`
          divRef.current!.style.opacity = '0'
          setTimeout(() => onClose?.(), 150)
        }}
      >
        <div
          ref={divRef}
          className={[DropdownStyles['animated-container']].join(' ')}
        >
          <div
            ref={contentRef}
            id={id}
            style={style}
            className={[DropdownStyles['dropdown'], classNames?.dropdown].join(
              ' ',
            )}
          >
            {children}
          </div>
        </div>
      </div>
    ) : (
      <></>
    )
  } else {
    return open ? (
      <div
        ref={parentRef}
        className={[
          DropdownStyles['overlay'],
          classNames?.touchscreenAnimatedOverlay,
        ].join(' ')}
      >
        <div
          className={[
            DropdownStyles['touchscreen-overlay'],
            classNames?.touchscreenOverlay,
          ].join(' ')}
          onClick={() => {
            divRef.current!.style.transform = `translateY(100%)`
            setTimeout(() => onClose?.(), 150)
          }}
        />
        <div
          ref={divRef}
          className={[
            DropdownStyles['touchscreen-animated-container'],
            classNames?.touchscreenAnimatedContainer,
          ].join(' ')}
          style={{
            bottom: 0,
          }}
        >
          <div
            ref={dropdownRef}
            className={[
              DropdownStyles['touchscreen-dropdown'],
              classNames?.touchscreenDropdown,
            ].join(' ')}
          >
            <div
              ref={barRef}
              className={[
                DropdownStyles['touchscreen-dropdown-bar'],
                classNames?.touchscreenDropdownBar,
              ].join(' ')}
              style={{
                pointerEvents: 'none',
              }}
            >
              <div
                className={[
                  DropdownStyles['touchscreen-dropdown-handle-container'],
                  classNames?.touchscreenDropdownHandleContainer,
                ].join(' ')}
              >
                <div
                  className={[
                    DropdownStyles['touchscreen-dropdown-handle'],
                    classNames?.touchscreenDropdownHandle,
                  ].join(' ')}
                />
              </div>
              {title && (
                <Typography.Title
                  level={4}
                  className={[
                    DropdownStyles['touchscreen-dropdown-title'],
                    classNames?.touchscreenDropdownTitle,
                  ].join(' ')}
                >
                  {title}
                </Typography.Title>
              )}
            </div>
            <div
              ref={contentRef}
              className={[
                DropdownStyles['touchscreen-dropdown-content'],
                classNames?.touchscreenDropdownContent,
                title &&
                  DropdownStyles['touchscreen-dropdown-content-with-title'],
              ].join(' ')}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <></>
    )
  }
}

export interface DropdownItemClasses {
  container?: string
  button?: ButtonClasses
}

export interface DropdownItemProps {
  ref?: React.LegacyRef<HTMLLIElement>
  classNames?: DropdownItemClasses
  children?: React.ReactNode
  touchScreen?: boolean
  rippleProps?: RipplesProps
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Item({
  ref,
  classNames,
  children,
  touchScreen,
  rippleProps,
  onClick,
}: DropdownItemProps) {
  return (
    <li
      ref={ref}
      className={[DropdownStyles['dropdown-item'], classNames?.container].join(
        ' ',
      )}
    >
      <Button
        classNames={{
          children: DropdownStyles['dropdown-item-content'],
          ...classNames?.button,
        }}
        touchScreen={touchScreen}
        rippleProps={rippleProps}
        block={true}
        type={'text'}
        size={'large'}
        onClick={onClick}
      >
        {children}
      </Button>
    </li>
  )
}

export interface DropdownIconClasses {
  icon?: string
}

export interface DropdownIconProps {
  classNames?: DropdownIconClasses
  children?: React.ReactNode
}

function Icon({ classNames, children }: DropdownIconProps) {
  return (
    <div
      className={[DropdownStyles['dropdown-icon'], classNames?.icon].join(' ')}
    >
      {children}
    </div>
  )
}

Dropdown.Item = Item
Dropdown.Icon = Icon
export default Dropdown
