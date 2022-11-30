import React from 'react'
import { animated, useTransition } from 'react-spring'
// @ts-ignore
import styles from './list.module.scss'

interface ListItemAnimationProps {
  key: string
  index: number
  elementHeight: number
  zIndex?: number
  style?: any
  y?: number
  height?: number
  opacity?: number
}

export interface ListProps {
  items: Array<{
    key: string
    element: () => React.ReactElement
    height: number
  }>
}

function List({ items }: ListProps) {
  let height = 0
  const animationProps: ListItemAnimationProps[] = []

  for (let i = 0; i < items.length; i++) {
    animationProps.push({
      key: items[i].key,
      index: i,
      elementHeight: items[i].height,
    })
  }

  const transitions = useTransition(
    animationProps.map((props) => {
      return {
        ...props,
        y: (height += props.elementHeight) - props.elementHeight,
      }
    }),
    {
      key: (item: ListItemAnimationProps) => item.key,
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }: ListItemAnimationProps) => ({
        y: y ?? 0,
        height: height ?? 0,
        opacity: 1,
      }),
      update: ({ y, height }: ListItemAnimationProps) => ({
        y: y ?? 0,
        height: height ?? 0,
      }),
    }
  )

  return (
    <div className={styles['list']} style={{ height }}>
      {transitions((style, item, t, index) => {
        return (
          <animated.div
            className={styles['card']}
            style={{
              zIndex: animationProps.length - index,
              ...style,
            }}
          >
            <div style={{ height: item.elementHeight }}>
              {items[item.index].element()}
            </div>
          </animated.div>
        )
      })}
    </div>
  )
}

export default List
