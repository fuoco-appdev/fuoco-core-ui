import React from 'react'
// @ts-ignore
import DividerStyles from './divider.module.scss'
import { Typography } from '../typography'

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
      ? DividerStyles['divider']
      : DividerStyles['divider-vertical'],
  ]
  classes.push(classNames?.divider)
  if (light) classes.push(DividerStyles['divider--light'])

  if (children) {
    classes.push(DividerStyles[`divider--${orientation}`])
  } else if (!children && type === 'horizontal') {
    classes.push(DividerStyles[`divider--no-text`])
  }

  return (
    <div className={classes.join(' ')} role="seperator" style={style}>
      {children && (
        <Typography.Text
          className={[
            DividerStyles['divider__content'],
            classNames?.content,
          ].join(' ')}
        >
          {children}
        </Typography.Text>
      )}
    </div>
  )
}
