import React from 'react'
// @ts-ignore
import CardStyles from './card.module.scss'
import Ripples, { RipplesProps } from 'react-ripples'

export interface CardClasses {
  container?: string
  card?: string
  hoverable?: string
  clickable?: string
}

export interface CardProps {
  ref?: React.RefObject<HTMLDivElement>
  key?: React.Key
  children?: React.ReactNode
  classNames?: CardClasses
  hoverable?: boolean
  clickable?: boolean
  style?: React.CSSProperties
  rippleProps?: RipplesProps
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

function Card(
  {
    key,
    children,
    classNames,
    hoverable,
    clickable,
    style,
    rippleProps,
    onClick,
  }: CardProps,
  ref: React.ForwardedRef<any>
) {
  let containerClasses = [CardStyles['button-ripple'], classNames?.container]
  let classes = [CardStyles['card'], classNames?.card]
  if (hoverable)
    classes.push(CardStyles['card-hoverable'], classNames?.hoverable)
  if (clickable) {
    classes.push(CardStyles['card-clickable'], classNames?.clickable)
  }

  return (
    <Ripples
      {...(clickable ? rippleProps : { color: 'rgba(0,0,0,0)' })}
      className={containerClasses.join(' ')}
      onClick={onClick}
    >
      <div ref={ref} key={key} className={classes.join(' ')} style={style}>
        {children}
      </div>
    </Ripples>
  )
}

export default React.forwardRef(Card)
