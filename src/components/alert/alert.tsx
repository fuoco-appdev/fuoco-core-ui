import React from 'react'
import { IconAlertTriangle } from '../icon/icons/icon-alert-triangle'
import { IconCheck } from '../icon/icons/icon-check'
import { IconInfo } from '../icon/icons/icon-info'
import { IconX } from '../icon/icons/icon-x'
import { IconXCircle } from '../icon/icons/icon-x-circle'
import { animated } from 'react-spring'
// @ts-ignore
import AlertStyles from './alert.module.scss'
import { Button } from '../button'

export interface Props {
  variant?: 'success' | 'danger' | 'warning' | 'info'
  className?: string
  title: string
  withIcon?: boolean
  closable?: boolean
  children?: React.ReactNode
  style?: any
  onCloseClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const icons: Record<
  'success' | 'danger' | 'warning' | 'info',
  React.ReactElement
> = {
  danger: <IconXCircle size="medium" />,
  success: <IconCheck size="medium" />,
  warning: <IconAlertTriangle size="medium" />,
  info: <IconInfo size="medium" />,
}

const Alert = ({
  variant = 'success',
  className,
  title,
  withIcon,
  closable,
  children,
  style,
  onCloseClick,
}: Props) => {
  let containerClasses = [AlertStyles['sbui-alert-container']]
  containerClasses.push(AlertStyles[`sbui-alert-container--${variant}`])
  if (className) containerClasses.push(className)
  let descriptionClasses = [AlertStyles['sbui-alert-description']]
  descriptionClasses.push(AlertStyles[`sbui-alert-description--${variant}`])

  return (
    <>
      <animated.div className={containerClasses.join(' ')} style={style}>
        <div className={AlertStyles['sbui-content']}>
          <div className={AlertStyles['sbui-icon-content-container']}>
            {withIcon && icons[variant]}
          </div>
          <div className={AlertStyles['sbui-description-content-container']}>
            <h3 className={AlertStyles['sbui-alert-title']}>{title}</h3>
            <div className={descriptionClasses.join(' ')}>{children}</div>
          </div>
        </div>
        {closable && (
          <div className={AlertStyles['sbui-close-root']}>
            <Button
              type={'text'}
              icon={<IconX size="xlarge" strokeWidth={1.5} stroke={'#fff'} />}
              onClick={(e) => onCloseClick?.(e)}
              className={AlertStyles['sbui-close-button']}
            />
          </div>
        )}
      </animated.div>
    </>
  )
}

export default Alert
