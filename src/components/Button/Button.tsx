import React from 'react'
// @ts-ignore
import ButtonStyles from './button.module.scss'
import { IconContext } from '../icon/icon-context'
import { IconLoader } from '../icon/icons/icon-loader'
import Ripples, { RipplesProps } from 'react-ripples'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  block?: boolean
  classNames?: {
    container?: string
    button?: string
    leftIconContainer?: string
    rightIconContainer?: string
    children?: string
  }
  children?: React.ReactNode
  touchScreen?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  loading?: boolean
  loadingCentered?: boolean
  shadow?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'full'
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
  ariaSelected?: boolean
  ariaControls?: string
  tabIndex?: 0 | -1
  role?: string
  textAlign?: 'left' | 'center' | 'right'
  as?: keyof JSX.IntrinsicElements
  rippleProps?: RipplesProps
}

export interface RefHandle {
  container: () => HTMLElement | null
  button: () => HTMLButtonElement | null
}

function Button(
  {
    block,
    className,
    classNames,
    children,
    danger,
    disabled = false,
    touchScreen = false,
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
  }: ButtonProps,
  ref: React.ForwardedRef<any>
) {
  // styles
  const showIcon = loading || icon

  let classes = [
    ButtonStyles['button'],
    ButtonStyles[`button-${type}`],
    classNames?.button,
  ]
  if (!touchScreen) {
    classes.push(
      ButtonStyles['button-desktop'],
      ButtonStyles[`button-${type}-desktop`]
    )
  }
  let containerClasses = [
    ButtonStyles['button-ripple'],
    className,
    classNames?.container,
  ]

  if (block) {
    containerClasses.push(ButtonStyles['button-w-full'])
    classes.push(ButtonStyles['button-w-full'])
  }

  if (danger) {
    classes.push(ButtonStyles['button-danger'])
  }

  if (shadow && type !== 'link' && type !== 'text') {
    classes.push(ButtonStyles['button-container-shadow'])
  }

  if (size) {
    classes.push(ButtonStyles[`button-${size}`])
  }

  const iconLoaderClasses = [ButtonStyles['button-anim-spin']]

  if (loadingCentered) {
    iconLoaderClasses.push(ButtonStyles[`button-loader-center`])
  }
  if (loading && loadingCentered) {
    classes.push(ButtonStyles[`button-text-fade-out`])
  }

  classes.push(ButtonStyles[`button-text-align-${textAlign}`])

  const leftIconClasses = [
    ButtonStyles['icon-container'],
    classNames?.leftIconContainer,
  ]
  if (children) {
    leftIconClasses.push(ButtonStyles['left-icon-space'])
  }

  const rightIconClasses = [
    ButtonStyles['icon-container'],
    classNames?.rightIconContainer,
  ]
  if (children) {
    rightIconClasses.push(ButtonStyles['right-icon-space'])
  }

  return (
    <Ripples {...rippleProps} className={containerClasses.join(' ')}>
      <button
        {...props}
        ref={ref}
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
              <div className={leftIconClasses.join(' ')}>{icon}</div>
            </IconContext.Provider>
          ) : null)}
        {children && (
          <span
            className={(ButtonStyles['button-children'], classNames?.children)}
          >
            {children}
          </span>
        )}
        {iconRight && !loading && (
          <IconContext.Provider value={{ contextSize: size }}>
            <div className={rightIconClasses.join(' ')}>{iconRight}</div>
          </IconContext.Provider>
        )}
      </button>
    </Ripples>
  )
}

export default React.forwardRef(Button)
