import React from 'react'
// @ts-ignore
import TypographyStyles from './typography.module.scss'
import Title from './title'
import Text from './text'
import Link from './link'

function Typography({ children, className, tag = 'div', style }: any) {
  let classes = [
    TypographyStyles['sbui-typography'],
    TypographyStyles['sbui-typography-container'],
  ]
  if (className) {
    classes.push(className)
  }
  let CustomTag: any = `${tag}`
  return (
    <CustomTag style={style} className={classes.join(' ')}>
      {children}
    </CustomTag>
  )
}

Typography.Title = Title
Typography.Text = Text
Typography.Link = Link

export default Typography
