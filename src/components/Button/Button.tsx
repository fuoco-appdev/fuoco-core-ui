import React, { forwardRef, useRef, useImperativeHandle } from 'react'
// @ts-ignore
import ButtonStyles from './Button.module.css'
import { IconContext } from '../Icon/IconContext'
import { IconLoader } from '../Icon/icons/IconLoader'
import Ripples, { RipplesProps } from 'react-ripples'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  block?: boolean
  className?: any
  children?: React.ReactNode
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  loading?: boolean
  loadingCentered?: boolean
  shadow?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  style?: React.CSSProperties
  type?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'outline'
    | 'dashed'
    | 'link'
    | 'text'
  danger?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  buttonRef?: React.RefObject<HTMLButtonElement>
  ariaSelected?: boolean
  ariaControls?: string
  tabIndex?: 0 | -1
  role?: string
  textAlign?: 'left' | 'center' | 'right'
  as?: keyof JSX.IntrinsicElements
  rippleProps?: RipplesProps
}

interface CustomButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

export interface RefHandle {
  container: () => HTMLElement | null
  button: () => HTMLButtonElement | null
}

const Button = forwardRef<RefHandle, ButtonProps>(
  ({
    buttonRef,
    block,
    className,
    children,
    danger,
    disabled = false,
    onClick,
    icon,
    iconRight,
    loading = false,
    loadingCentered = false,
    shadow = true,
    size = 'tiny',
    style,
    type = 'primary',
    htmlType,
    ariaSelected,
    ariaControls,
    tabIndex,
    role,
    as,
    textAlign = 'center',
    rippleProps,
    ...props
  }: ButtonProps) => {
    // styles
    const showIcon = loading || icon

    let classes = [ButtonStyles['sbui-btn']]
    let containerClasses = [ButtonStyles['sbui-btn-container']]

    classes.push(ButtonStyles[`sbui-btn-${type}`])

    if (block) {
      containerClasses.push(ButtonStyles['sbui-btn--w-full'])
      classes.push(ButtonStyles['sbui-btn--w-full'])
    }

    if (danger) {
      classes.push(ButtonStyles['sbui-btn--danger'])
    }

    if (shadow && type !== 'link' && type !== 'text') {
      classes.push(ButtonStyles['sbui-btn-container--shadow'])
    }

    if (size) {
      classes.push(ButtonStyles[`sbui-btn--${size}`])
    }

    if (className) {
      classes.push(className)
    }

    const iconLoaderClasses = [ButtonStyles['sbui-btn--anim--spin']]

    if (loadingCentered) {
      iconLoaderClasses.push(ButtonStyles[`sbui-btn-loader--center`])
    }
    if (loading && loadingCentered) {
      classes.push(ButtonStyles[`sbui-btn--text-fade-out`])
    }

    classes.push(ButtonStyles[`sbui-btn--text-align-${textAlign}`])

    return (
      <Ripples {...rippleProps} className={ButtonStyles['sbui-btn-ripple']}>
        <button
          {...props}
          ref={buttonRef}
          id={props.id}
          className={classes.join(' ')}
          disabled={loading || (disabled && true)}
          style={style}
          onClick={(e) => setTimeout(() => onClick?.(e), rippleProps?.during)}
          type={htmlType}
          tabIndex={tabIndex}
          role={role}
        >
          {showIcon &&
            (loading ? (
              <IconLoader size={size} className={iconLoaderClasses.join(' ')} />
            ) : icon ? (
              <IconContext.Provider value={{ contextSize: size }}>
                {icon}
              </IconContext.Provider>
            ) : null)}
          {children && (
            <span className={ButtonStyles['sbui-btn-children']}>
              {children}
            </span>
          )}
          {iconRight && !loading && (
            <IconContext.Provider value={{ contextSize: size }}>
              {iconRight}
            </IconContext.Provider>
          )}
        </button>
      </Ripples>
    )
  }
)

export default Button
