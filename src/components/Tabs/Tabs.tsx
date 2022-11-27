import React, { useEffect, useRef, useState } from 'react'

// @ts-ignore
import TabsStyles from './tabs.module.scss'

interface TabProps {
  children?: any
  id?: string
  label?: string
  icon?: React.ReactNode
}

interface TabsProps {
  tabs?: TabProps[]
  onChange?: (id: string) => void
  type?: 'pills' | 'underlined'
  direction?: 'vertical' | 'horizontal'
  activeId?: string
  scrollable?: boolean
}

function Tabs({
  tabs = [],
  activeId,
  type = 'pills',
  direction = 'horizontal',
  onChange,
  scrollable,
}: TabsProps) {
  const [buttonRefs, setButtonRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({})
  const [selectedId, setSelectedId] = useState<string>(activeId ?? '')

  useEffect(() => {
    if (selectedId !== activeId) {
      setSelectedId(activeId ?? '')
    }
  }, [activeId])

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null)

  const navRef = useRef<HTMLDivElement>(null)
  const navRect = navRef?.current?.getBoundingClientRect()

  const selectedRect = buttonRefs[selectedId]?.getBoundingClientRect()

  const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true)
  const isInitialRender = useRef(true)

  const onLeaveTabs = () => {
    setIsInitialHoveredElement(true)
    setHoveredTabIndex(null)
  }

  const onEnterTab = (
    e:
      | React.PointerEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLButtonElement>,
    i: number
  ) => {
    if (!e.target || !(e.target instanceof HTMLButtonElement)) return

    setHoveredTabIndex((prev) => {
      if (prev != null && prev !== i) {
        setIsInitialHoveredElement(false)
      }

      return i
    })
    setHoveredRect(e.target.getBoundingClientRect())
  }

  const onSelectTab = (id: string) => {
    onChange?.(id)
    setSelectedId(id)
  }

  let hoverStyles: React.CSSProperties = { opacity: 0 }
  if (type === 'underlined' && navRect && hoveredRect) {
    hoverStyles.transform = `translate3d(${hoveredRect.left - navRect.left}px,${
      hoveredRect.top - navRect.top
    }px,0px)`
    hoverStyles.width = hoveredRect.width
    hoverStyles.height = hoveredRect.height
    hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0
    hoverStyles.transition = isInitialHoveredElement
      ? `opacity 150ms`
      : `transform 150ms 0ms, opacity 150ms 0ms, width 150ms`
  }

  let selectStyles: React.CSSProperties = {}
  if (type === 'underlined' && navRect && selectedRect) {
    if (direction === 'vertical') {
      selectStyles.transform = `translate3d(calc(${
        selectedRect.right
      }px), calc(${selectedRect.bottom - navRect.bottom}px), 0px)`
      selectStyles.height = selectedRect.height
      selectStyles.width = '2px'
      selectStyles.transition = isInitialRender.current
        ? `opacity 150ms 150ms`
        : `transform 150ms 0ms, opacity 150ms 150ms, height 150ms`
    } else {
      selectStyles.transform = `translateX(calc(${
        selectedRect.left - navRect.left
      }px + 10%))`
      selectStyles.width = selectedRect.width * 0.8
      selectStyles.transition = isInitialRender.current
        ? `opacity 150ms 150ms`
        : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`
    }

    isInitialRender.current = false
  }

  let selectPillStyles: React.CSSProperties = { opacity: 0 }
  if (type === 'pills' && navRect && selectedRect) {
    selectPillStyles.width = selectedRect.width
    selectPillStyles.height = selectedRect.height
    selectPillStyles.transform = `translate3d(calc(${
      selectedRect.left - navRect.left
    }px), ${selectedRect.top - navRect.top}px, 0px)`
    selectPillStyles.opacity = 1
    selectPillStyles.transition = isInitialRender.current
      ? `opacity 150ms 150ms`
      : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`

    isInitialRender.current = false
  }

  const navClasses = [TabsStyles['nav']]
  if (direction === 'vertical') {
    navClasses.push(TabsStyles['nav-verticle'])
  }

  return (
    <nav
      ref={navRef}
      className={navClasses.join(' ')}
      onPointerLeave={onLeaveTabs}
    >
      {tabs.map((item, i) => {
        const iconClasses = [TabsStyles['tab-icon']]
        if (item.label) {
          iconClasses.push(TabsStyles['tab-icon-space'])
        }

        return (
          <button
            key={i}
            className={TabsStyles['tab-button']}
            ref={(el) => (buttonRefs[item.id ?? ''] = el)}
            onPointerEnter={(e) => onEnterTab(e, i)}
            onFocus={(e) => onEnterTab(e, i)}
            onClick={() => onSelectTab(item.id ?? '')}
          >
            {item.icon && (
              <div className={iconClasses.join(' ')}>{item.icon}</div>
            )}
            {item.label}
          </button>
        )
      })}
      {type === 'pills' ? (
        <div
          className={TabsStyles['tab-slider-pill']}
          style={selectPillStyles}
        />
      ) : (
        <div className={TabsStyles['tab-slider']} style={hoverStyles} />
      )}
      {type === 'underlined' && (
        <div className={TabsStyles['tab-outline']} style={selectStyles} />
      )}
    </nav>
  )
}

export default Tabs
