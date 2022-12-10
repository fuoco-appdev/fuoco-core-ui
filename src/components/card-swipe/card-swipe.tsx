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
    down,
    delta: [xDelta],
    direction: [xDir],
    distance: [xDis],
  }: any) => {
    if (orientation !== 'horizontal') {
      return
    }

    api.start((i) => {
      if (!ref.current) {
        return
      }

      if (down && xDis > ref.current.clientWidth / 2) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          items.length - 1
        )
      }

      const x =
        (i - index.current) * ref.current.clientWidth + (down ? xDelta : 0)
      const sc = down ? 1 - xDis / ref.current.clientWidth / 3 : 1
      return { x, y: 0, ...(allowScale && { sc }) }
    })
  }

  const onDragY = ({
    down,
    delta: [xDelta, yDelta],
    direction: [xDir, yDir],
    distance: [xDis, yDis],
  }: any) => {
    if (orientation !== 'vertical') {
      return
    }

    api.start((i) => {
      if (!ref.current) {
        return
      }

      if (down && yDis > ref.current.clientHeight / 2) {
        index.current = clamp(
          index.current + (yDir > 0 ? -1 : 1),
          0,
          items.length - 1
        )
      }

      const y =
        (i - index.current) * ref.current.clientHeight + (down ? yDelta : 0)
      const sc = down ? 1 - yDis / ref.current.clientHeight / 3 : 1
      return { y, x: 0, ...(allowScale && { sc }) }
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
