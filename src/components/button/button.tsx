import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
// @ts-ignore
import ButtonStyles from './button.module.scss'
import { IconContext } from '../icon/icon-context'
import Ripples, { RipplesProps } from 'react-ripples'
import { CSSTransition } from 'react-transition-group'

export interface ButtonClasses {
  root?: string
  container?: string
  button?: string
  loading?: string
  leftIconContainer?: string
  rightIconContainer?: string
  children?: string
  floatingLabelContainer?: string
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  block?: boolean
  classNames?: ButtonClasses
  children?: React.ReactNode
  touchScreen?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  floatingLabel?: string
  loading?: boolean
  loadingComponent?: JSX.Element
  shadow?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'full'
  style?: React.CSSProperties
  rounded?: boolean
  type?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'outline'
    | 'dashed'
    | 'link'
    | 'text'
    | 'rounded'
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
    floatingLabel,
    onClick,
    icon,
    iconRight,
    loading = false,
    loadingComponent,
    shadow = true,
    size = 'tiny',
    style,
    rounded = false,
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
  ref: React.ForwardedRef<any>,
) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const floatingLabelRef = useRef<HTMLDivElement | null>(null)
  const [isFloatingLabelVisible, setIsFloatingLabelVisible] =
    useState<boolean>(false)

  useEffect(() => {
    if (!rootRef.current || !floatingLabelRef.current) {
      return
    }

    const rootRect = rootRef.current.getBoundingClientRect()
    const floatingLabelRect = floatingLabelRef.current.getBoundingClientRect()
    const x = rootRect.width / 2 - floatingLabelRect.width / 2
    const y = 8
    floatingLabelRef.current.style.transform = `translate(${x}px, ${y}px)`

    if (rootRect.x <= floatingLabelRect.width) {
      floatingLabelRef.current.style.transform = `translate(0px, ${y}px)`
    } else if (rootRect.x + rootRect.width >= window.innerWidth) {
      floatingLabelRef.current.style.transform = `translate(calc(-100% + ${rootRect.width}px), ${y}px)`
    }
  }, [rootRef.current, floatingLabelRef.current, isFloatingLabelVisible])

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
      ButtonStyles[`button-${type}-desktop`],
    )
  }
  let containerClasses = [
    ButtonStyles['button-ripple'],
    className,
    classNames?.container,
  ]
  if (rounded || type === 'rounded') {
    containerClasses.push(ButtonStyles['button-ripple-rounded'])
    classes.push(ButtonStyles['button-rounded'])
  }

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

  if (size && children) {
    classes.push(ButtonStyles[`button-${size}-with-children`])
  } else {
    classes.push(ButtonStyles[`button-${size}`])
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
    <div
      ref={rootRef}
      className={[
        ButtonStyles['root'],
        block && ButtonStyles['root-block'],
        classNames?.root,
      ].join(' ')}
    >
      <Ripples
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        {...rippleProps}
        className={containerClasses.join(' ')}
      >
        <button
          {...props}
          ref={ref}
          id={props.id}
          className={classes.join(' ')}
          disabled={disabled && true}
          style={style}
          onClick={(e) =>
            setTimeout(() => {
              if (!loading) {
                onClick?.(e)
              }
            }, rippleProps?.during)
          }
          type={htmlType}
          tabIndex={tabIndex}
          role={role}
          onMouseEnter={() => setIsFloatingLabelVisible(true)}
          onMouseLeave={() => setIsFloatingLabelVisible(false)}
        >
          {showIcon &&
            (loading ? (
              <div />
            ) : (
              icon && <div className={leftIconClasses.join(' ')}>{icon}</div>
            ))}
          {loading && (
            <div
              className={[ButtonStyles['loading'], classNames?.loading].join(
                ' ',
              )}
            >
              {loadingComponent}
            </div>
          )}
          {!loading && children && (
            <span
              className={
                (ButtonStyles['button-children'], classNames?.children)
              }
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
      {rounded && !touchScreen && floatingLabel && (
        <CSSTransition
          nodeRef={floatingLabelRef}
          in={isFloatingLabelVisible}
          unmountOnExit={!rootRef.current}
          timeout={150}
          classNames={{
            appear: ButtonStyles['label-appear'],
            appearActive: ButtonStyles['label-appear-active'],
            appearDone: ButtonStyles['label-appear-done'],
            enter: ButtonStyles['label-enter'],
            enterActive: ButtonStyles['label-enter-active'],
            enterDone: ButtonStyles['label-enter-done'],
            exit: ButtonStyles['label-exit'],
            exitActive: ButtonStyles['label-exit-active'],
            exitDone: ButtonStyles['label-exit-done'],
          }}
        >
          <div
            ref={floatingLabelRef}
            className={[
              ButtonStyles['floating-label-container'],
              classNames?.floatingLabelContainer,
            ].join(' ')}
          >
            {floatingLabel}
          </div>
        </CSSTransition>
      )}
    </div>
  )
}

export default React.forwardRef(Button)
