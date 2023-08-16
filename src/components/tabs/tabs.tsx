import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

// @ts-ignore
import TabsStyles from './tabs.module.scss'
import Button, { ButtonClasses } from '../button/button'
import { Solid } from '../icon'
import { RipplesProps } from 'react-ripples'

export interface TabProps {
  id?: string
  label?: string
  icon?: React.ReactNode
}

export interface TabsProps {
  classNames?: TabsClasses
  flex?: boolean
  touchScreen?: boolean
  tabs?: TabProps[]
  onChange?: (id: string) => void
  type?: 'pills' | 'underlined'
  direction?: 'vertical' | 'horizontal'
  activeId?: string
  removable?: boolean
  removableRippleProps?: RipplesProps
}

export interface TabsClasses {
  nav?: string
  tabIcon?: string
  tabButton?: string
  buttonText?: string
  hoveredTabIcon?: string
  hoveredTabButton?: string
  tabSliderPill?: string
  tabSlider?: string
  tabOutline?: string
  removableButtonContainer?: string
  removableButton?: ButtonClasses
}

function Tabs({
  classNames,
  flex = false,
  touchScreen = false,
  tabs = [],
  activeId,
  type = 'pills',
  direction = 'horizontal',
  onChange,
  removable = false,
  removableRippleProps,
}: TabsProps) {
  const [buttonRefs, setButtonRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({})
  const [selectedId, setSelectedId] = useState<string>(activeId ?? '')
  const [selectedTabIndex, setSelectedTabIndex] = useState<number | null>(null)
  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)
  const [hoveredRect, setHoveredRect] = useState<DOMRect | undefined>(undefined)
  const navRef = useRef<HTMLDivElement>(null)
  const removableRef = useRef<HTMLButtonElement>(null)
  const [prevSelectedRect, setPrevSelectedRect] = useState<DOMRect | undefined>(
    undefined
  )
  const [selectedRect, setSelectedRect] = useState<DOMRect | undefined>(
    undefined
  )
  const [removableRect, setRemovableRect] = useState<DOMRect | undefined>(
    undefined
  )
  const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true)
  const [navRect, setNavRect] = useState<DOMRect | undefined>(undefined)
  const [selectStyles, setSelectStyles] = useState<React.CSSProperties>({})
  const [hoverStyles, setHoverStyles] = useState<React.CSSProperties>({
    opacity: 0,
  })
  const [selectPillStyles, setSelectPillStyles] = useState<React.CSSProperties>(
    { opacity: 0 }
  )
  const [removableStyles, setRemovableStyles] = useState<React.CSSProperties>({
    opacity: 0,
  })
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (selectedId !== activeId) {
      setSelectedId(activeId ?? '')
    }
  }, [activeId])

  useLayoutEffect(() => {
    if (!navRef.current) {
      return
    }

    const resizeObserver = new ResizeObserver(() => {
      setNavRect(navRef.current?.getBoundingClientRect())
      setPrevSelectedRect(selectedRect)
      setSelectedRect(buttonRefs[selectedId]?.getBoundingClientRect())
      setHoveredRect(buttonRefs[selectedId]?.getBoundingClientRect())
      setRemovableRect(removableRef?.current?.getBoundingClientRect())
    })
    resizeObserver.observe(navRef.current)
    return () => resizeObserver.disconnect()
  }, [selectedId])

  useEffect(() => {
    if (type === 'underlined' && navRect && selectedRect) {
      const style: React.CSSProperties = {}
      if (direction === 'vertical') {
        style.transform = `translate3d(calc(${selectedRect.right}px), calc(${
          selectedRect.bottom - navRect.bottom
        }px), 0px)`
        style.height = selectedRect.height
        style.width = '2px'
        style.transition = isInitialRender.current
          ? `opacity 150ms 150ms`
          : `transform 150ms 0ms, opacity 150ms 150ms, height 150ms`
        if (prevSelectedRect?.right === selectedRect.right) {
          isInitialRender.current = false
        }
      } else {
        style.transform = `translateX(calc(${
          selectedRect.left - navRect.left
        }px + 10%))`
        style.width = selectedRect.width * 0.8
        style.transition = isInitialRender.current
          ? `opacity 150ms 150ms`
          : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`
        if (prevSelectedRect?.left !== selectedRect.left) {
          isInitialRender.current = false
        }
      }

      setSelectStyles(style)
    }

    if (type === 'underlined' && navRect && hoveredRect) {
      let styles: React.CSSProperties = { opacity: 0 }
      styles.transform = `translate3d(${hoveredRect.left - navRect.left}px,${
        hoveredRect.top - navRect.top
      }px,0px)`
      styles.width = hoveredRect.width
      styles.height = hoveredRect.height
      styles.opacity = hoveredTabIndex != null ? 1 : 0
      styles.transition = isInitialHoveredElement
        ? `opacity 150ms`
        : `transform 150ms 0ms, opacity 150ms 0ms, width 150ms`
      setHoverStyles(styles)
    }

    if (type === 'pills' && navRect && selectedRect) {
      let styles: React.CSSProperties = { opacity: 0 }
      styles.width = selectedRect.width
      styles.height = selectedRect.height
      styles.transform = `translate3d(calc(${
        selectedRect.left - navRect.left
      }px), ${selectedRect.top - navRect.top}px, 0px)`
      styles.opacity = 1
      styles.transition = isInitialRender.current
        ? `opacity 150ms 150ms`
        : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`

      isInitialRender.current = false
      setSelectPillStyles(styles)
    }

    if (removable && removableRef.current && navRect && selectedRect) {
      let styles: React.CSSProperties = { opacity: 0 }
      styles.transform = `translate3d(calc(${
        selectedRect.left -
        navRect.left +
        (selectedRect.width - ((removableRect?.width ?? 0) / 3) * 2)
      }px), ${
        selectedRect.top -
        navRect.top -
        (selectedRect.height - ((removableRect?.width ?? 0) / 3) * 2)
      }px, 0px)`
      styles.opacity = 1
      styles.transition = isInitialRender.current
        ? `opacity 150ms 150ms`
        : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`

      isInitialRender.current = false
      setRemovableStyles(styles)
    }
  }, [
    navRect,
    selectedRect,
    hoveredRect,
    isInitialHoveredElement,
    hoveredTabIndex,
  ])

  useLayoutEffect(() => {
    if (selectedId === '') {
      setSelectedTabIndex(null)
      setHoveredTabIndex(null)
      setPrevSelectedRect(undefined)
      setSelectedRect(undefined)
      setHoveredRect(undefined)
      setRemovableRect(undefined)
    } else {
      const index = tabs.findIndex((value) => value.id === selectedId)
      setSelectedTabIndex(index)
      setHoveredTabIndex(index)
      setPrevSelectedRect(buttonRefs[selectedId]?.getBoundingClientRect())
      setSelectedRect(buttonRefs[selectedId]?.getBoundingClientRect())
      setHoveredRect(buttonRefs[selectedId]?.getBoundingClientRect())
      setRemovableRect(removableRef?.current?.getBoundingClientRect())
    }
  }, [selectedId])

  const onLeaveTabs = () => {
    setIsInitialHoveredElement(true)
    setHoveredTabIndex(selectedTabIndex)
    setHoveredRect(selectedRect)
  }

  const onEnterTab = (
    e:
      | React.PointerEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLButtonElement>,
    i: number
  ) => {
    setHoveredTabIndex((prev) => {
      if (prev != null && prev !== i) {
        setIsInitialHoveredElement(false)
      }

      return i
    })
    setHoveredRect((e.target as HTMLButtonElement).getBoundingClientRect())
  }

  const onSelectTab = (id: string, index: number) => {
    buttonRefs[selectedId]?.blur()
    onChange?.(id)
    setSelectedId(id)
    setSelectedTabIndex(index)
    setHoveredTabIndex(index)
  }

  const navClasses = [TabsStyles['nav'], classNames?.nav]
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
        const iconClasses = [TabsStyles['tab-icon'], classNames?.tabIcon]
        if (item.label) {
          iconClasses.push(TabsStyles['tab-icon-space'])
        }

        const buttonClasses = [
          TabsStyles['tab-button'],
          TabsStyles[`tab-button-${direction}`],
          classNames?.tabButton,
        ]
        if (item.label) {
          buttonClasses.push(TabsStyles['tab-button-with-text'])
          buttonClasses.push(TabsStyles[`tab-button-${type}-with-text`])
        }

        if (flex) {
          buttonClasses.push(TabsStyles['tab-button-flex'])
        }

        if (i === hoveredTabIndex) {
          buttonClasses.push(classNames?.hoveredTabButton)
          iconClasses.push(classNames?.hoveredTabIcon)
        }

        return (
          <button
            key={i}
            className={buttonClasses.join(' ')}
            ref={(el) => (buttonRefs[item.id ?? ''] = el)}
            onPointerEnter={(e) => onEnterTab(e, i)}
            onFocus={(e) => onEnterTab(e, i)}
            onClick={() => onSelectTab(item.id ?? '', i)}
          >
            {item.icon && (
              <div className={iconClasses.join(' ')}>{item.icon}</div>
            )}
            <div
              className={[
                TabsStyles['button-text'],
                classNames?.buttonText,
              ].join(' ')}
            >
              {item.label}
            </div>
          </button>
        )
      })}
      {type === 'pills' ? (
        <div
          className={[
            TabsStyles['tab-slider-pill'],
            classNames?.tabSliderPill,
          ].join(' ')}
          style={selectPillStyles}
        />
      ) : (
        <div
          className={[TabsStyles['tab-slider'], classNames?.tabSlider].join(
            ' '
          )}
          style={hoverStyles}
        />
      )}
      {type === 'underlined' && (
        <div
          className={[TabsStyles['tab-outline'], classNames?.tabOutline].join(
            ' '
          )}
          style={selectStyles}
        />
      )}
      {removable && (
        <div
          className={[
            TabsStyles['removable-button-container'],
            classNames?.removableButtonContainer,
          ].join(' ')}
          style={removableStyles}
        >
          <Button
            classNames={{
              button: TabsStyles['removable-button'],
              ...classNames?.removableButton,
            }}
            onClick={() => {
              buttonRefs[selectedId]?.blur()
              onChange?.('')
              setSelectedId('')
            }}
            rippleProps={removableRippleProps}
            touchScreen={touchScreen}
            ref={removableRef}
            block={true}
            rounded={true}
            type={'primary'}
            size={'tiny'}
            icon={<Solid.Cancel size={14} />}
          />
        </div>
      )}
    </nav>
  )
}

export default Tabs
