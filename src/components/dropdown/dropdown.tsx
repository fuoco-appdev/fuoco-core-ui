import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { animated, config, useSpring, useTransition } from 'react-spring'
import { Button } from '../button/index'

// @ts-ignore
import DropdownStyles from './dropdown.module.scss'
import { useDrag } from '@use-gesture/react'
import { ButtonClasses } from '../button/button'

export enum DropdownAlignment {
  Left,
  Right,
}

export interface DropdownProps {
  id?: string
  classNames?: DropdownClasses
  align?: DropdownAlignment
  extendThresholdPercent?: number
  dropThresholdPercent?: number
  extendedHeightPercent?: number
  defaultHeightPercent?: number
  open?: boolean
  touchScreen?: boolean
  title?: string
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
}

function Dropdown({
  id,
  classNames,
  align = DropdownAlignment.Right,
  extendThresholdPercent = 70,
  dropThresholdPercent = 30,
  extendedHeightPercent = 90,
  defaultHeightPercent = 60,
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
  const uListRef = useRef<HTMLUListElement | null>(null)
  const divRef = useRef<HTMLDivElement | null>(null)
  const barRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const initialClientHeightRef = useRef<number>(0)
  const [top, setTop] = useState<number>(0)
  const [left, setLeft] = useState<number>(0)

  const desktopTransition = useTransition(open, {
    from: {
      scale: 0.5,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
    leave: {
      scale: 0.5,
      opacity: 0,
    },
    config: {
      tension: 1000,
      friction: 40,
      bounce: 0,
    },
  })

  const touchScreenOverlayTransition = useTransition(open, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: {
      tension: 1000,
      friction: 10,
      bounce: 0,
    },
  })

  const [touchScreenProps, touchScreenApi] = useSpring(() => ({
    from: {
      minHeight: '0%',
    },
    to: {
      minHeight: '0%',
    },
    config: {
      tension: 1000,
      friction: 80,
      bounce: 0,
    },
  }))

  const dragBind = useDrag(
    ({ down, movement: [mx, my] }) => {
      const parentHeight = parentRef.current?.clientHeight ?? 0
      const extendedHeight = (parentHeight * extendedHeightPercent) / 100
      const defaultHeight = (parentHeight * defaultHeightPercent) / 100
      const maxHeight = Math.min(
        initialClientHeightRef.current - my,
        extendedHeight
      )
      const dropThresholdHeight = (parentHeight * dropThresholdPercent) / 100
      const extendThresholdHeight =
        (parentHeight * extendThresholdPercent) / 100

      if (down) {
        touchScreenApi.start({
          immediate: down,
          minHeight: `${maxHeight}px`,
        })
      }

      if (!down && maxHeight > extendThresholdHeight) {
        touchScreenApi.start({
          from: {
            minHeight: `${maxHeight}px`,
          },
          to: {
            minHeight: `${extendedHeight}px`,
          },
          onRest: () => {
            const clientHeight = divRef.current?.clientHeight ?? 0
            initialClientHeightRef.current = clientHeight
          },
        })
      } else if (
        !down &&
        maxHeight > dropThresholdHeight &&
        maxHeight < extendThresholdHeight
      ) {
        const contentHeight = contentRef.current?.clientHeight ?? defaultHeight
        touchScreenApi.start({
          from: {
            minHeight: `${maxHeight}px`,
          },
          to: {
            minHeight:
              contentHeight < defaultHeight
                ? `${contentHeight}px`
                : `${defaultHeight}px`,
          },
          onRest: () => {
            const clientHeight = divRef.current?.clientHeight ?? 0
            initialClientHeightRef.current = clientHeight
          },
        })
      } else if (!down && maxHeight < dropThresholdHeight) {
        touchScreenApi.start({
          from: {
            minHeight: `${maxHeight}px`,
          },
          to: {
            minHeight: '0%',
          },
          onRest: () => {
            const clientHeight = divRef.current?.clientHeight ?? 0
            initialClientHeightRef.current = clientHeight
            onClose?.()
          },
        })
      }
    },
    { axis: 'y' }
  )

  useLayoutEffect(() => {
    if (!touchScreen) {
      if (open) {
        const parentHeight =
          parentRef?.current?.getBoundingClientRect().height ?? 0
        const parentY = parentRef?.current?.getBoundingClientRect().y ?? 0
        const parentBottom = parentY + parentHeight
        const anchorY = anchorRef?.current?.getBoundingClientRect().y ?? 0
        const anchorX = anchorRef?.current?.getBoundingClientRect().x ?? 0
        const anchorHeight = anchorRef?.current?.clientHeight ?? 0
        const dropdownHeight = uListRef.current?.clientHeight ?? 0
        const dropdownY = anchorY + anchorHeight
        const dropdownBottom = dropdownY + dropdownHeight * 2
        const anchorWidth =
          anchorRef?.current?.getBoundingClientRect().width ?? 0
        const dropdownWidth =
          uListRef.current?.getBoundingClientRect().width ?? 0
        if (dropdownBottom > parentBottom && parentHeight > anchorHeight) {
          setTop(anchorY - anchorHeight - dropdownHeight)
        } else {
          setTop(anchorY + anchorHeight)
        }

        if (align === DropdownAlignment.Left) {
          setLeft(anchorX)
        } else if (align === DropdownAlignment.Right) {
          setLeft(anchorX + anchorWidth - dropdownWidth * 2)
        }

        onOpen?.()
      } else {
        onClose?.()
      }
    } else {
      const parentHeight = parentRef.current?.clientHeight ?? 0
      const defaultHeight = (parentHeight * defaultHeightPercent) / 100
      const contentHeight = contentRef.current?.clientHeight ?? defaultHeight
      if (contentHeight <= 0) {
        return
      }

      const height =
        contentHeight < defaultHeight ? contentHeight : defaultHeight
      const heightPercent = (height * 100) / parentHeight
      touchScreenApi.start({
        minHeight: open ? `${heightPercent}%` : '0%',
        onRest: () => {
          const clientHeight = divRef.current?.clientHeight ?? 0
          initialClientHeightRef.current = clientHeight
        },
      })
    }
  }, [open, children])

  if (!touchScreen) {
    return touchScreenOverlayTransition(
      (overlayStyle: any, item: any) =>
        item && (
          <animated.div
            ref={parentRef}
            style={overlayStyle}
            className={[
              DropdownStyles['touchscreen-animated-overlay'],
              classNames?.touchscreenAnimatedOverlay,
            ].join(' ')}
            onClick={onClose}
          >
            {desktopTransition(
              (transitionStyle: any, item: any) =>
                item && (
                  <animated.div
                    style={{
                      ...transitionStyle,
                      ...style,
                      position: 'absolute',
                      zIndex: 24,
                      y: top,
                      x: left,
                    }}
                  >
                    <ul
                      ref={uListRef}
                      id={id}
                      className={[
                        DropdownStyles['dropdown'],
                        classNames?.dropdown,
                      ].join(' ')}
                    >
                      {children}
                    </ul>
                  </animated.div>
                )
            )}
          </animated.div>
        )
    )
  } else {
    return touchScreenOverlayTransition(
      (overlayStyle: any, item: any) =>
        item && (
          <animated.div
            style={{ ...overlayStyle }}
            ref={parentRef}
            className={[
              DropdownStyles['touchscreen-animated-overlay'],
              classNames?.touchscreenAnimatedOverlay,
            ].join(' ')}
          >
            <div
              className={[
                DropdownStyles['touchscreen-overlay'],
                classNames?.touchscreenOverlay,
              ].join(' ')}
              onClick={onClose}
            />
            <animated.div
              ref={divRef}
              className={[
                DropdownStyles['touchscreen-animated-container'],
                classNames?.touchscreenAnimatedContainer,
              ].join(' ')}
              {...dragBind()}
              style={{
                ...touchScreenProps,
                touchAction: 'none',
                bottom: 0,
              }}
            >
              <div
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
                    <div
                      className={[
                        DropdownStyles['touchscreen-dropdown-title'],
                        classNames?.touchscreenDropdownTitle,
                      ].join(' ')}
                    >
                      {title}
                    </div>
                  )}
                </div>
                <div
                  ref={contentRef}
                  className={[
                    DropdownStyles['touchscreen-dropdown-content'],
                    title &&
                      DropdownStyles['touchscreen-dropdown-content-with-title'],
                  ].join(' ')}
                  style={{
                    overflowY: 'auto',
                  }}
                >
                  {children}
                </div>
              </div>
            </animated.div>
          </animated.div>
        )
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
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Item({
  ref,
  classNames,
  children,
  touchScreen,
  onClick,
}: DropdownItemProps) {
  return (
    <li
      ref={ref}
      className={[DropdownStyles['dropdown-item'], classNames?.container].join(
        ' '
      )}
    >
      <Button
        classNames={{
          children: DropdownStyles['dropdown-item-content'],
          ...classNames?.button,
        }}
        touchScreen={touchScreen}
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
