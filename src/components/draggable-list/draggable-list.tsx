import React, { useEffect, useRef, useState } from 'react'
import { useSprings, animated } from 'react-spring'
import { useDrag } from '@use-gesture/react'
import { clamp } from 'lodash'
// @ts-ignore
import move from 'lodash-move'
// @ts-ignore
import styles from './draggable-list.module.scss'

export interface DraggableListItem {
  id: string
  height: number
  element: React.ReactElement
}

const fn =
  (
    order: number[],
    items: DraggableListItem[],
    active = false,
    originalIndex = 0,
    curIndex = 0,
    y = 0
  ) =>
  (index: number) =>
    active && index === originalIndex
      ? {
          y: curIndex * items[curIndex].height + y,
          zIndex: 1,
          shadow: 15,
          immediate: (key: string) => key === 'y' || key === 'zIndex',
        }
      : {
          y: order.indexOf(index) * (items[index]?.height ?? 0),
          zIndex: 0,
          shadow: 0,
          immediate: false,
        }

export interface DraggableListProps {
  items: DraggableListItem[]
  onChanged?: (items: string[]) => void
}

function DraggableList({ items, onChanged }: DraggableListProps) {
  const [totalHeight, setTotalHeight] = useState<number>(0)
  const orderRef = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  const [springs, api] = useSprings(items.length, fn(orderRef.current, items)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = orderRef.current.indexOf(originalIndex)
    const curRow = clamp(
      Math.round((curIndex * 100 + y) / 100),
      0,
      items.length - 1
    )
    const newOrder = move(orderRef.current, curIndex, curRow)
    api.start(fn(newOrder, items, active, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) {
      orderRef.current = newOrder
      onChanged?.(newOrder.map((index: number) => items[index].id))
    }
  })

  useEffect(() => {
    let height = 0
    items.map((value) => {
      height += value.height
    })
    setTotalHeight(height)

    orderRef.current = items.map((_, index) => index)
    api.start(fn(orderRef.current, items))
  }, [items])

  return (
    <div className={styles['root']} style={{ height: totalHeight }}>
      {springs.map(({ zIndex, shadow, y }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          className={styles['item']}
          style={{
            zIndex,
            boxShadow: shadow.to(
              (s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
            ),
            y,
          }}
          children={items[i].element}
        />
      ))}
    </div>
  )
}

export default DraggableList
