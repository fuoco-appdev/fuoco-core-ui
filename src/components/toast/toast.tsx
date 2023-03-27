import React, { ComponentProps, useEffect, useMemo, useState } from 'react'
import { Refresh, Close } from '../icon/icons/line'
import { Error, CheckCircle } from '../icon/icons/solid'
import { Button } from '../button/index'
// @ts-ignore
import ToastStyles from './toast.module.scss'
import { Typography } from '../../index'
import { useTransition, animated, SpringValue } from 'react-spring'
import { X } from '../icon/icon-import-handler'

export type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom'

const icons: Partial<{ [key in ToastType]: any }> = {
  error: <Error size={24} color={'#f44336'} stroke={'#f44336'} />,
  success: <CheckCircle size={24} color={'#4caf50'} stroke={'#4caf50'} />,
}

export interface ToastProps {
  key: string
  iconColor?: string
  refCallback?: (ref: HTMLDivElement | null) => void
  id?: string
  type?: 'success' | 'error' | 'loading'
  icon?: React.ReactNode
  message?: string
  description?: string
  closable?: boolean
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
  actions?: React.ReactNode
  actionsPosition?: 'inline' | 'bottom'
  width?: 'xs' | 'sm' | 'md'
  disableLife?: boolean
  life?: SpringValue<string>
  touchScreen?: boolean
}

function Message({
  children,
  ...props
}: ComponentProps<typeof Typography.Text>) {
  return (
    <Typography.Text className={ToastStyles['toast-message']} {...props}>
      {children}
    </Typography.Text>
  )
}

function Description({
  children,
  ...props
}: ComponentProps<typeof Typography.Text>) {
  return (
    <Typography.Text className={ToastStyles['toast-description']} {...props}>
      {children}
    </Typography.Text>
  )
}

function Toast(props: ToastProps) {
  let containerClasses = [ToastStyles['toast-container']]
  if (props.type) {
    containerClasses.push(ToastStyles[`toast-container-${props.type}`])
  }
  if (props.touchScreen) {
    containerClasses.push(ToastStyles['toast-container-touchscreen'])
  }

  if (props.width === 'sm' || props.width === 'md') {
    containerClasses.push(ToastStyles[`toast-container-${props.width}`])
  }

  let closeButtonClasses = [ToastStyles['toast-close-button']]
  if (props.type) {
    closeButtonClasses.push(ToastStyles[`toast-close-button-${props.type}`])
  }

  let detailsClasses = [ToastStyles['toast-details']]
  if (props.actionsPosition === 'bottom') {
    detailsClasses.push(ToastStyles[`toast-details-actions-bottom`])
  }

  return (
    <div ref={props?.refCallback} className={containerClasses.join(' ')}>
      <div className={ToastStyles['toast-content']}>
        <Typography.Text className={ToastStyles['toast-icon-container']}>
          {props.type === 'loading' ? (
            <Refresh
              size={24}
              className={ToastStyles['alert-anim-spin']}
              stroke={props.iconColor}
              color={props.iconColor}
            />
          ) : (
            props.icon || icons[props.type ?? 'blank']
          )}
        </Typography.Text>
        <div className={ToastStyles['toast-text-container']}>
          <div className={detailsClasses.join(' ')}>
            <div className={ToastStyles['toast-details__content']}>
              <Message>{props.message}</Message>
              {props.description && (
                <Description>{props.description}</Description>
              )}
            </div>
            {props.actions && (
              <div className={ToastStyles['toast-details__actions']}>
                {props.actions}
              </div>
            )}
          </div>
        </div>
        {props.closable && (
          <div className={ToastStyles['toast-close-container']}>
            <Button
              type={'text'}
              className={closeButtonClasses.join(' ')}
              icon={
                <Close
                  size={24}
                  aria-hidden="true"
                  stroke={props.iconColor}
                  color={props.iconColor}
                />
              }
              onClick={props.onClose}
            />
          </div>
        )}
      </div>
      {!props.disableLife && props.life && (
        <animated.div
          className={ToastStyles['toast-life']}
          style={{ right: props.life }}
        />
      )}
    </div>
  )
}

interface ToastOverlayProps {
  toasts: ToastProps[]
  timeout?: number
  align?: 'left' | 'right' | 'center'
  touchScreen?: boolean
}

export function ToastOverlay({
  toasts,
  timeout = 6000,
  align = 'right',
  touchScreen = false,
}: ToastOverlayProps) {
  const refMap = useMemo(() => new WeakMap<any, HTMLDivElement>(), [])
  const cancelMap = useMemo(() => new WeakMap<any, any>(), [])
  const [items, setItems] = useState<ToastProps[]>(toasts)

  const transitions = useTransition(items, {
    from: { opacity: 0, height: 0, life: '100%' },
    keys: (item: ToastProps) => item.key,
    enter: (item: ToastProps) => async (next, cancel) => {
      cancelMap.set(item, cancel)
      await next({ opacity: 1, height: refMap.get(item)?.offsetHeight })
      await next({ life: '0%' })
    },
    leave: [{ opacity: 0 }, { height: 0 }],
    onRest: (result, ctrl, item) => {
      setItems((state) =>
        state.filter((i) => {
          return i.key !== item.key
        })
      )
    },
    config: (item, index, phase) => (key) =>
      phase === 'enter' && key === 'life'
        ? { duration: timeout }
        : {
            tension: 1000,
            friction: 30,
            bounce: 0,
            precision: 0.1,
          },
  })

  useEffect(() => {
    setItems((state) => [...state, ...toasts])
  }, [toasts])

  return (
    <div className={ToastStyles['toast-root']}>
      <div
        className={[
          ToastStyles['toast-overlay-container'],
          ToastStyles[`toast-overlay-container-${align}`],
        ].join(' ')}
      >
        {transitions(({ life, ...style }, item) => (
          <animated.div style={style}>
            <Toast
              {...item}
              touchScreen={touchScreen}
              life={life}
              onClose={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                if (cancelMap && cancelMap.has(item) && life?.get() !== '0%') {
                  cancelMap.get(item)()
                }
              }}
              refCallback={(ref: HTMLDivElement | null) => {
                if (ref && item?.key) {
                  refMap.set(item, ref)
                }
              }}
            />
          </animated.div>
        ))}
      </div>
    </div>
  )
}

Toast.ToastOverlay = ToastOverlay
Toast.Toast = Toast

export default Toast
