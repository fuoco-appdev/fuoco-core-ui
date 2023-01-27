import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import { Button } from '../button/index'

// @ts-ignore
import DropdownStyles from './dropdown.module.scss'

export enum DropdownAlignment {
  Left,
  Right,
}

interface DropDownProps {
  id?: string
  className?: string
  ref?: React.LegacyRef<HTMLUListElement>
  align?: DropdownAlignment
  open?: boolean
  touchScreen?: boolean
  parentRef?: React.RefObject<HTMLElement>
  anchorRef?: React.RefObject<HTMLElement>
  onOpen?: () => void
  onClose?: () => void
  children?: React.ReactNode
  style?: React.CSSProperties
}

function Dropdown({
  id,
  className,
  ref,
  align = DropdownAlignment.Right,
  open,
  touchScreen = false,
  parentRef,
  anchorRef,
  onOpen,
  onClose,
  children,
  style,
}: DropDownProps) {
  const uListRef = useRef<HTMLUListElement | null>(null)
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
      translateY: window.innerHeight + (uListRef.current?.clientHeight ?? 0),
    },
    to: {
      translateY: window.innerHeight - (uListRef.current?.clientHeight ?? 0),
    },
    config: {
      tension: 1000,
      friction: 80,
      bounce: 0,
    },
  }))

  useLayoutEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      const elementRect = uListRef?.current?.getBoundingClientRect()
      if (
        elementRect &&
        !(
          event.clientX >= elementRect.left &&
          event.clientX <= elementRect.left + elementRect.width &&
          event.clientY >= elementRect.top &&
          event.clientY <= elementRect.top + elementRect.height
        )
      ) {
        onClose?.()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useLayoutEffect(() => {
    if (!touchScreen) {
      if (open) {
        const parentHeight =
          parentRef?.current?.getBoundingClientRect().height ?? 0
        const parentY = parentRef?.current?.getBoundingClientRect().y ?? 0
        const parentBottom = parentY + parentHeight
        const anchorY = anchorRef?.current?.getBoundingClientRect().y ?? 0
        const anchorTop = anchorRef?.current?.clientTop ?? 0
        const anchorHeight = anchorRef?.current?.clientHeight ?? 0
        const dropdownHeight = uListRef.current?.clientHeight ?? 0
        const dropdownY = anchorY + anchorHeight
        const dropdownBottom = dropdownY + dropdownHeight * 2
        const anchorLeft = anchorRef?.current?.clientLeft ?? 0
        const anchorWidth =
          anchorRef?.current?.getBoundingClientRect().width ?? 0
        const dropdownWidth =
          uListRef.current?.getBoundingClientRect().width ?? 0
        if (dropdownBottom > parentBottom && parentHeight > anchorHeight) {
          setTop(anchorTop - anchorHeight * 2 - dropdownHeight)
        } else {
          setTop(anchorTop)
        }

        if (align === DropdownAlignment.Left) {
          setLeft(anchorLeft)
        } else if (align === DropdownAlignment.Right) {
          setLeft(anchorLeft + anchorWidth - dropdownWidth)
        }

        onOpen?.()
      } else {
        onClose?.()
      }
    } else {
      touchScreenApi.start({
        translateY: open
          ? window.innerHeight - (uListRef.current?.clientHeight ?? 0)
          : window.innerHeight + (uListRef.current?.clientHeight ?? 0),
      })
    }
  }, [open, children])

  if (!touchScreen) {
    return desktopTransition(
      (transitionStyle, item) =>
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
              className={[DropdownStyles['dropdown'], className].join(' ')}
            >
              {children}
            </ul>
          </animated.div>
        )
    )
  } else {
    return touchScreenOverlayTransition(
      (overlayStyle, item) =>
        item && (
          <animated.div
            style={overlayStyle}
            className={DropdownStyles['touchscreen-overlay']}
          >
            <animated.div
              style={{
                ...touchScreenProps,
                position: 'absolute',
                width: '100%',
              }}
            >
              <ul
                ref={uListRef}
                className={[
                  DropdownStyles['touchscreen-dropdown'],
                  className,
                ].join(' ')}
              >
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
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Item({ ref, children, onClick }: ItemProps) {
  return (
    <li ref={ref} className={DropdownStyles['dropdown-item']}>
      <Button
        classNames={{
          children: DropdownStyles['dropdown-item-content'],
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
