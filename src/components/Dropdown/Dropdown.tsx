import React, { useEffect, useRef, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import { Button } from '../button/index'

// @ts-ignore
import DropdownStyles from './dropdown.module.scss'

export enum DropdownAlignment {
  Left,
  Right,
}

interface RootProps {
  id?: string
  className?: string
  ref?: React.LegacyRef<HTMLUListElement>
  align?: DropdownAlignment
  open?: boolean
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
  parentRef,
  anchorRef,
  onOpen,
  onClose,
  children,
  style,
}: RootProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [top, setTop] = useState<number>(0)
  const [left, setLeft] = useState<number>(0)

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        anchorRef?.current &&
        !anchorRef?.current.contains(event.target as Node)
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
  }, [ref])

  useEffect(() => {
    if (open) {
      const parentHeight =
        parentRef?.current?.getBoundingClientRect().height ?? 0
      const parentY = parentRef?.current?.getBoundingClientRect().y ?? 0
      const parentBottom = parentY + parentHeight
      const anchorY = anchorRef?.current?.getBoundingClientRect().y ?? 0
      const anchorTop = anchorRef?.current?.clientTop ?? 0
      const anchorHeight =
        anchorRef?.current?.getBoundingClientRect().height ?? 0
      const dropdownHeight =
        containerRef.current?.getBoundingClientRect().height ?? 0
      const dropdownY = anchorY + anchorHeight
      const dropdownBottom = dropdownY + dropdownHeight * 2
      const anchorLeft = anchorRef?.current?.clientLeft ?? 0
      const anchorWidth = anchorRef?.current?.getBoundingClientRect().width ?? 0
      const dropdownWidth =
        containerRef.current?.getBoundingClientRect().width ?? 0
      if (dropdownBottom > parentBottom && parentHeight > anchorHeight) {
        setTop(anchorTop - dropdownHeight * 2)
      } else {
        setTop(anchorTop)
      }

      if (align === DropdownAlignment.Left) {
        setLeft(anchorLeft)
      } else if (align === DropdownAlignment.Right) {
        setLeft(anchorLeft + anchorWidth - dropdownWidth * 2)
      }

      onOpen?.()
    } else {
      onClose?.()
    }
  }, [open])

  const transition = useTransition(open, {
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
  return transition(
    (transitionStyle, item) =>
      item && (
        <animated.div
          ref={containerRef}
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
            id={id}
            ref={ref}
            className={[DropdownStyles['sbui-dropdown'], className].join(' ')}
          >
            {children}
          </ul>
        </animated.div>
      )
  )
}

interface ItemProps {
  ref?: React.LegacyRef<HTMLLIElement>
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Item({ ref, children, onClick }: ItemProps) {
  return (
    <li ref={ref} className={DropdownStyles['sbui-dropdown-item']}>
      <Button
        className={DropdownStyles['sbui-dropdown-item-content']}
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
  return <div className={DropdownStyles['sbui-dropdown-icon']}>{children}</div>
}

Dropdown.Item = Item
Dropdown.Icon = Icon
export default Dropdown
