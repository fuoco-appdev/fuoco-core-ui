import React from 'react'
// @ts-ignore
import CardStyles from './card.module.scss'

interface CardProps {
  children?: React.ReactNode
  className?: string
  hoverable?: boolean
  style?: React.CSSProperties
}

function Card({ children, className, hoverable, style }: CardProps) {
  let classes = [CardStyles['sbui-card']]
  if (hoverable) classes.push(CardStyles['sbui-card--hoverable'])
  if (className) classes.push(className)

  return (
    <div className={classes.join(' ')} style={style}>
      {children}
    </div>
  )
}

export default Card
