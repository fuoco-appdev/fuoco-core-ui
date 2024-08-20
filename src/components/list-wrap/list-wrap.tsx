import { useEffect, useMemo, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import useMeasure from 'react-use-measure'
// @ts-ignore
import styles from './list-wrap.module.scss'

interface ListWrapItemAnimationProps {
  key: string
  index: number
  x?: number
  y?: number
  height?: number
  width?: number
}

export interface ListWrapProps {
  items: Array<{
    key: string
    element: () => React.ReactElement
    height: number
  }>
}

function useMedia(queries: string[], values: number[], defaultValue: number) {
  const match = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue
  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return value
}

function ListWrap({ items }: ListWrapProps) {
  const columns = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    [5, 3, 2],
    2,
  )
  const [ref, { width }] = useMeasure()
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0)
    let gridItems: ListWrapItemAnimationProps[] = items.map((child, index) => {
      const column = heights.indexOf(Math.min(...heights))
      const x = (width / columns) * column
      const y = (heights[column] += child.height) - child.height
      return {
        key: child.key,
        index: index,
        x,
        y,
        width: width / columns,
        height: child.height,
      }
    })
    return [heights, gridItems]
  }, [columns, items, width])

  const transitions = useTransition(gridItems, {
    key: (item: ListWrapItemAnimationProps) => item.key,
    from: ({ x, y, width, height }: ListWrapItemAnimationProps) => ({
      x,
      y,
      width,
      height,
      opacity: 0,
    }),
    enter: ({ x, y, width, height }: ListWrapItemAnimationProps) => ({
      x,
      y,
      width,
      height,
      opacity: 1,
    }),
    update: ({ x, y, width, height }: ListWrapItemAnimationProps) => ({
      x,
      y,
      width,
      height,
    }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })

  return (
    <div
      ref={ref}
      className={styles['list']}
      style={{ height: Math.max(...heights) }}
    >
      {transitions((style, item) => (
        <animated.div style={style} className={styles['card']}>
          <div style={{ height: item.height }}>
            {items[item.index]?.element()}
          </div>
        </animated.div>
      ))}
    </div>
  )
}

export default ListWrap
