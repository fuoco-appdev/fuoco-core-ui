import React from 'react'
import { Close } from '../icon/icons/line'
import { Warning, Info, Error, CheckCircle } from '../icon/icons/solid'
import { animated } from 'react-spring'
// @ts-ignore
import AlertStyles from './alert.module.scss'
import { Button } from '../button'
import { Typography } from '../typography'

export interface AlertProps {
  variant?: 'success' | 'danger' | 'warning' | 'info'
  className?: string
  iconColor?: string
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
  danger: <Error size={21} strokeWidth={0} />,
  success: <CheckCircle size={21} strokeWidth={0} />,
  warning: <Warning size={21} strokeWidth={0} />,
  info: <Info size={21} strokeWidth={0} />,
}

const Alert = ({
  variant = 'success',
  className,
  iconColor = '#ffffff',
  title,
  withIcon,
  closable,
  children,
  style,
  onCloseClick,
}: AlertProps) => {
  let containerClasses = [AlertStyles['alert-container']]
  containerClasses.push(AlertStyles[`alert-container--${variant}`])
  if (className) containerClasses.push(className)
  let descriptionClasses = [AlertStyles['alert-description']]
  descriptionClasses.push(AlertStyles[`alert-description--${variant}`])

  return (
    <>
      <animated.div className={containerClasses.join(' ')} style={style}>
        <div className={AlertStyles['content']}>
          <div className={AlertStyles['icon-content-container']}>
            {withIcon && icons[variant]}
          </div>
          <div className={AlertStyles['description-content-container']}>
            <Typography.Title level={4} className={AlertStyles['alert-title']}>
              {title}
            </Typography.Title>
            <Typography.Text className={descriptionClasses.join(' ')}>
              {children}
            </Typography.Text>
          </div>
        </div>
        {closable && (
          <div className={AlertStyles['close-root']}>
            <Button
              type={'text'}
              icon={
                <Close
                  stroke={iconColor}
                  color={iconColor}
                  size={21}
                  strokeWidth={0}
                />
              }
              onClick={(e) => onCloseClick?.(e)}
              className={AlertStyles['close-button']}
            />
          </div>
        )}
      </animated.div>
    </>
  )
}

export default Alert
