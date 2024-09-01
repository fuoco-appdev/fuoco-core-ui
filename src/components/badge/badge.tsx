import React from 'react'
// @ts-ignore
import BadgeStyles from './badge.module.scss'

export interface BadgeProps {
  color?:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
  children: string
  size?: 'large' | 'small'
  dot?: boolean
}

function Badge({ color, children, size, dot }: BadgeProps) {
  let classes = [BadgeStyles['badge']]
  if (color) {
    classes.push(BadgeStyles[`badge--${color}`])
  }
  if (size === 'large') {
    classes.push(BadgeStyles['badge--large'])
  }

  return (
    <span className={classes.join(' ')}>
      {dot && (
        <svg
          className={`${BadgeStyles[`badge-dot`]} ${
            BadgeStyles[`badge--${color}`]
          }`}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      )}

      {children}
    </span>
  )
}
export default Badge
