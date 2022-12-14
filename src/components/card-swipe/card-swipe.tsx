import { clamp } from 'lodash'
import { useRef } from 'react'
import { animated, useSprings } from 'react-spring'
import { useDrag } from '@use-gesture/react'
// @ts-ignore
import styles from './card-swipe.module.scss'

export interface CardSwipeProps {
  items: React.ReactElement[]
  allowScale?: boolean
  orientation?: 'vertical' | 'horizontal'
}

function CardSwipe({
  items,
  allowScale,
  orientation = 'horizontal',
}: CardSwipeProps): JSX.Element {
  const index = useRef(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const [props, api] = useSprings(items.length, (i) => {
    return {
      y: orientation === 'vertical' ? i * window.innerHeight : 0,
      x: orientation === 'horizontal' ? i * window.innerWidth : 0,
      ...(allowScale && { sc: 1 }),
    }
  })

  const onDragX = ({
    active,
    direction: [xDir],
    movement: [mx],
    distance: [xDis],
    cancel,
  }: any) => {
    if (!ref.current) {
      return
    }

    if (orientation !== 'horizontal') {
      return
    }

    if (active && xDis > ref.current.clientWidth / 2) {
      index.current = clamp(
        index.current + (xDir > 0 ? -1 : 1),
        0,
        items.length - 1
      )
      cancel()
    }

    api.start((i) => {
      if (!ref.current) {
        return
      }

      const x =
        (i - index.current) * ref.current.clientWidth + (active ? mx : 0)
      const sc = active ? 1 - xDis / ref.current.clientWidth / 3 : 1
      return { x, y: 0, ...(allowScale && { sc }) }
    })
  }

  const onDragY = ({
    active,
    movement: [mx, my],
    direction: [xDir, yDir],
    distance: [xDis, yDis],
    cancel,
  }: any) => {
    if (!ref.current) {
      return
    }

    if (orientation !== 'vertical') {
      return
    }

    if (active && yDis > ref.current.clientHeight / 2) {
      index.current = clamp(
        index.current + (yDir > 0 ? -1 : 1),
        0,
        items.length - 1
      )
      cancel()
    }

    api.start((i) => {
      if (!ref.current) {
        return
      }

      const y =
        (i - index.current) * ref.current.clientHeight + (active ? my : 0)
      const sc = active ? 1 - yDis / ref.current.clientHeight / 3 : 1
      return { x: 0, y, ...(allowScale && { sc }) }
    })
  }

  const bindX = useDrag(onDragX, { axis: 'x' })
  const bindY = useDrag(onDragY, { axis: 'y' })

  return (
    <div ref={ref} className={styles['root']}>
      {props.map(({ x, y, sc }, i) => {
        return (
          <animated.div
            className={styles['item-container']}
            {...(orientation === 'horizontal' && { ...bindX() })}
            {...(orientation === 'vertical' && { ...bindY() })}
            key={i}
            style={{
              ...(orientation === 'horizontal' && { touchAction: 'pan-x' }),
              ...(orientation === 'vertical' && { touchAction: 'pan-y' }),
              x,
              y,
            }}
          >
            <animated.div
              className={styles['item-content']}
              style={{
                ...(allowScale && { scale: sc }),
              }}
            >
              {items[i]}
            </animated.div>
          </animated.div>
        )
      })}
    </div>
  )
}

export default CardSwipe
