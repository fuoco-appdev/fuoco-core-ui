import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import { Button } from '../button/index'

// @ts-ignore
import DropdownStyles from './dropdown.module.scss'
import { useDrag } from '@use-gesture/react'

export enum DropdownAlignment {
  Left,
  Right,
}

export interface DropDownProps {
  id?: string
  className?: string
  align?: DropdownAlignment
  dropThresholdPercent?: number
  open?: boolean
  touchScreen?: boolean
  anchorRef?: React.RefObject<HTMLElement>
  onOpen?: () => void
  onClose?: () => void
  children?: React.ReactNode
  style?: React.CSSProperties
}

function Dropdown({
  id,
  className,
  align = DropdownAlignment.Right,
  dropThresholdPercent = 50,
  open,
  touchScreen = false,
  anchorRef,
  onOpen,
  onClose,
  children,
  style,
}: DropDownProps) {
  const parentRef = useRef<HTMLDivElement | null>(null)
  const uListRef = useRef<HTMLUListElement | null>(null)
  const divRef = useRef<HTMLDivElement | null>(null)
  const [isScrolling, setIsScrolling] = useState<boolean>(true)
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
      bottom: -window.innerHeight,
    },
    to: {
      bottom: 0,
    },
    config: {
      tension: 1000,
      friction: 80,
      bounce: 0,
    },
  }))

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    const y = -my
    if (y < 0) {
      const scrollTop = divRef.current?.scrollTop ?? 0
      if (isScrolling && scrollTop <= 0) {
        setIsScrolling(false)
      }
      touchScreenApi.start({
        bottom: down ? y : 0,
        immediate: down,
      })
    } else {
      if (!isScrolling) {
        setIsScrolling(true)
      }
    }

    const clientHeight = divRef.current?.clientHeight ?? 0
    const dropdownHeight =
      clientHeight - (clientHeight * dropThresholdPercent) / 100
    if (y < -dropdownHeight) {
      touchScreenApi.start({
        bottom: -clientHeight,
        onRest: () => {
          if (!isScrolling) {
            setIsScrolling(true)
          }
          onClose?.()
        },
      })
    }
  })

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
      touchScreenApi.start({
        bottom: open ? 0 : -window.innerHeight,
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
            className={DropdownStyles['touchscreen-overlay']}
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
                      className={[DropdownStyles['dropdown'], className].join(
                        ' '
                      )}
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
            style={overlayStyle}
            className={DropdownStyles['touchscreen-overlay']}
            onClick={onClose}
          >
            <animated.div
              ref={divRef}
              className={DropdownStyles['touchscreen-animated-container']}
              {...bind()}
              onScroll={() => {
                const scrollTop = divRef.current?.scrollTop ?? 0
                if (isScrolling && scrollTop <= 0) {
                  setIsScrolling(false)
                }
              }}
              style={{
                ...touchScreenProps,
                touchAction: !isScrolling ? 'none' : 'initial',
              }}
            >
              <ul
                ref={uListRef}
                className={[
                  DropdownStyles['touchscreen-dropdown'],
                  className,
                ].join(' ')}
              >
                <div className={DropdownStyles['touchscreen-dropdown-bar']}>
                  <div
                    className={
                      DropdownStyles['touchscreen-dropdown-handle-container']
                    }
                  >
                    <div
                      className={DropdownStyles['touchscreen-dropdown-handle']}
                    />
                  </div>
                </div>
                {children}
              </ul>
            </animated.div>
          </animated.div>
        )
    )
  }
}

interface ItemProps {
  ref?: React.LegacyRef<HTMLLIElement>
  classNames?: {
    container?: string
    button?: {
      container?: string
      button?: string
      leftIconContainer?: string
      rightIconContainer?: string
      children?: string
    }
  }
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Item({ ref, classNames, children, onClick }: ItemProps) {
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
        type={'text'}
        size={'large'}
        onClick={onClick}
      >
        {children}
      </Button>
    </li>
  )
}

interface IconProps {
  children?: React.ReactNode
}

function Icon({ children }: IconProps) {
  return <div className={DropdownStyles['dropdown-icon']}>{children}</div>
}

Dropdown.Item = Item
Dropdown.Icon = Icon
export default Dropdown
