import React from 'react'
// @ts-ignore
import LinkStyles from './link.module.scss'

interface Props {
  children?: React.ReactNode
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename'
  href?: string
  className?: string
  style?: React.CSSProperties
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function Link({
  children,
  target = '_blank',
  href,
  className,
  onClick,
  style,
}: Props) {
  let classes = [LinkStyles['typography'], LinkStyles['typography-link']]
  if (className) {
    classes.push(className)
  }

  return (
    <a
      onClick={onClick}
      className={classes.join(' ')}
      href={href}
      target={target}
      rel="noopener noreferrer"
      style={style}
    >
      {children}
    </a>
  )
}

export default Link
