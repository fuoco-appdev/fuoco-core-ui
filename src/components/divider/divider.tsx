import React from 'react'
// @ts-ignore
import DividerStyles from './divider.module.scss'

interface Props {
  children?: React.ReactNode
  classNames?: DividerClasses
  light?: boolean
  orientation?: 'left' | 'right' | 'center'
  style?: React.CSSProperties
  type?: 'vertical' | 'horizontal'
}

export interface DividerClasses {
  divider?: string
  content?: string
}

export default function Divider({
  children,
  classNames,
  light = false,
  orientation = 'center',
  style,
  type = 'horizontal',
}: Props) {
  let classes = [
    type === 'horizontal'
      ? DividerStyles['sbui-divider']
      : DividerStyles['sbui-divider-vertical'],
  ]
  classes.push(classNames?.divider)
  if (light) classes.push(DividerStyles['sbui-divider--light'])

  if (children) {
    classes.push(DividerStyles[`sbui-divider--${orientation}`])
  } else if (!children && type === 'horizontal') {
    classes.push(DividerStyles[`sbui-divider--no-text`])
  }

  return (
    <div className={classes.join(' ')} role="seperator" style={style}>
      {children && (
        <span
          className={[
            DividerStyles['sbui-divider__content'],
            classNames?.content,
          ].join(' ')}
        >
          {children}
        </span>
      )}
    </div>
  )
}
