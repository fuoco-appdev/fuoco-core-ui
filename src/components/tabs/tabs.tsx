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
  selectedTabIcon?: string
  selectedTabButton?: string
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
  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const removableRef = useRef<HTMLButtonElement>(null)
  const removableRect = removableRef?.current?.getBoundingClientRect()
  const selectedRect = buttonRefs[selectedId]?.getBoundingClientRect()
  const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true)
  const [navRect, setNavRect] = useState<DOMRect | undefined>(undefined)
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (selectedId !== activeId) {
      setSelectedId(activeId ?? '')
    }
  }, [activeId])

  useLayoutEffect(() => {
    const updateSize = () => {
      setNavRect(navRef.current?.getBoundingClientRect())
    }

    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

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
    buttonRefs[selectedId]?.blur()
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

  let removableStyles: React.CSSProperties = { opacity: 0 }
  if (removable && removableRef.current && navRect && selectedRect) {
    removableStyles.transform = `translate3d(calc(${
      selectedRect.left -
      navRect.left +
      (selectedRect.width - ((removableRect?.width ?? 0) / 3) * 2)
    }px), ${
      selectedRect.top -
      navRect.top -
      (selectedRect.height - ((removableRect?.width ?? 0) / 3) * 2)
    }px, 0px)`
    removableStyles.opacity = 1
    removableStyles.transition = isInitialRender.current
      ? `opacity 150ms 150ms`
      : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`

    isInitialRender.current = false
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

        const buttonClasses = [TabsStyles['tab-button'], classNames?.tabButton]
        if (item.label) {
          buttonClasses.push(TabsStyles['tab-button-with-text'])
        }

        if (flex) {
          buttonClasses.push(TabsStyles['tab-button-flex'])
        }

        if (item.id === selectedId) {
          buttonClasses.push(classNames?.selectedTabButton)
          iconClasses.push(classNames?.selectedTabIcon)
        }

        return (
          <button
            key={i}
            className={buttonClasses.join(' ')}
            ref={(el) => (buttonRefs[item.id ?? ''] = el)}
            onPointerEnter={(e) => onEnterTab(e, i)}
            onFocus={(e) => onEnterTab(e, i)}
            onClick={() => onSelectTab(item.id ?? '')}
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
