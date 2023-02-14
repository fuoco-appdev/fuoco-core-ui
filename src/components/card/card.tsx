import React from 'react'
// @ts-ignore
import CardStyles from './card.module.scss'

export interface CardProps {
  ref?: React.RefObject<HTMLDivElement>
  key?: React.Key
  children?: React.ReactNode
  className?: string
  hoverable?: boolean
  clickable?: boolean
  style?: React.CSSProperties
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

function Card(
  { key, children, className, hoverable, clickable, style, onClick }: CardProps,
  ref: React.ForwardedRef<any>
) {
  let classes = [CardStyles['card']]
  if (hoverable) classes.push(CardStyles['card-hoverable'])
  if (clickable) {
    classes.push(CardStyles['card-clickable'])
  }
  if (className) classes.push(className)

  return (
    <div
      ref={ref}
      key={key}
      className={classes.join(' ')}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default React.forwardRef(Card)
