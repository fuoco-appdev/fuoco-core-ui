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
  selectedTabIcon?: string
  selectedTabButton?: string
  tabSliderContainer?: string
  tabSliderPill?: string
  tabSlider?: string
  tabOutline?: string
  removableContainer?: string
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
  const isMountedRef = useRef<boolean>(false)
  const navRef = useRef<HTMLDivElement>(null)
  const removableRef = useRef<HTMLButtonElement>(null)
  const [selectedRect, setSelectedRect] = useState<DOMRect | undefined>(
    undefined
  )
  const [removableRect, setRemovableRect] = useState<DOMRect | undefined>(
    undefined
  )
  const [navRect, setNavRect] = useState<DOMRect | undefined>(undefined)
  const [selectStyles, setSelectStyles] = useState<React.CSSProperties>({})
  const [hoverStyles, setHoverStyles] = useState<React.CSSProperties>({
    opacity: 0,
  })
  const [selectPillStyles, setSelectPillStyles] = useState<React.CSSProperties>(
    { opacity: 0 }
  )

  useEffect(() => {
    if (selectedId !== activeId) {
      setSelectedId(activeId ?? '')
    }
  }, [activeId])

  useEffect(() => {
    if (selectedId === '') {
      setSelectedTabIndex(null)
      setHoveredTabIndex(null)
      setSelectedRect(undefined)
      setHoveredRect(undefined)
      setRemovableRect(undefined)
      return
    }

    if (!navRef.current) {
      return
    }

    const resizeObserver = new ResizeObserver(() => {
      setNavRect(navRef.current?.getBoundingClientRect())
      setSelectedRect(buttonRefs[selectedId]?.getBoundingClientRect())
      setHoveredRect(buttonRefs[selectedId]?.getBoundingClientRect())
      setRemovableRect(removableRef?.current?.getBoundingClientRect())
      const index = tabs.findIndex((value) => value.id === selectedId)
      setSelectedTabIndex(index)
      setHoveredTabIndex(index)
    })
    resizeObserver.observe(navRef.current)

    return () => resizeObserver.disconnect()
  }, [selectedId])

  useLayoutEffect(() => {
    if (type === 'underlined' && navRect) {
      if (selectedRect) {
        const styles: React.CSSProperties = {}
        if (direction === 'vertical') {
          styles.transform = `translate3d(${
            selectedRect.left - navRect.left + navRect.width
          }px, ${selectedRect.bottom - navRect.bottom}px, 0px)`
          styles.height = selectedRect.height
          styles.width = '2px'
        } else {
          styles.transform = `translateX(calc(${
            selectedRect.left - navRect.left
          }px + 10%))`
          styles.width = selectedRect.width * 0.8
          if (!isMountedRef.current) {
            styles.transition = 'none'
          }
        }

        setSelectStyles(styles)
      } else {
        setSelectStyles({ opacity: 0 })
      }

      if (hoveredRect) {
        let styles: React.CSSProperties = { opacity: 0 }
        styles.transform = `translate3d(${hoveredRect.left - navRect.left}px,${
          hoveredRect.top - navRect.top
        }px,0px)`
        styles.width = hoveredRect.width
        styles.height = hoveredRect.height
        styles.opacity = hoveredTabIndex != null ? 1 : 0
        if (!isMountedRef.current) {
          styles.transition = 'none'
        }
        setHoverStyles(styles)
      } else {
        setHoverStyles({ opacity: 0 })
      }
    }

    if (type === 'pills' && navRect && selectedRect) {
      let styles: React.CSSProperties = { opacity: 0 }
      styles.width = selectedRect.width
      styles.height = selectedRect.height
      styles.transform = `translate3d(calc(${
        selectedRect.left - navRect.left
      }px), ${selectedRect.top - navRect.top}px, 0px)`
      styles.opacity = 1
      if (!isMountedRef.current) {
        styles.transition = 'none'
      }
      setSelectPillStyles(styles)
    } else {
      setSelectPillStyles({ opacity: 0 })
    }

    isMountedRef.current = true
  }, [navRect, selectedRect, hoveredRect, removableRect])

  const onLeaveTabs = () => {
    setHoveredRect(selectedRect)
    setHoveredTabIndex(selectedTabIndex)
  }

  const onEnterTab = (
    e:
      | React.PointerEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLButtonElement>,
    i: number
  ) => {
    setNavRect(navRef.current?.getBoundingClientRect())
    setHoveredRect((e.target as HTMLButtonElement).getBoundingClientRect())
    setHoveredTabIndex(i)
  }

  const onSelectTab = (id: string, index: number) => {
    onChange?.(id)
    buttonRefs[selectedId]?.blur()
    setSelectedId(id)
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

        if (i === selectedTabIndex) {
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
      {removable && (
        <div
          className={[
            TabsStyles['removable-container'],
            classNames?.removableContainer,
          ].join(' ')}
          style={selectPillStyles}
        >
          <div
            className={[
              TabsStyles['removable-button-container'],
              classNames?.removableButtonContainer,
            ].join(' ')}
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
              rounded={true}
              type={'primary'}
              size={'tiny'}
              icon={<Solid.Cancel size={14} />}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Tabs
