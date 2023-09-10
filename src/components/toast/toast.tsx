import React, { ComponentProps, useEffect, useMemo, useState } from 'react'
import { Refresh, Close } from '../icon/icons/line'
import { Error, CheckCircle } from '../icon/icons/solid'
import { Button } from '../button/index'
// @ts-ignore
import ToastStyles from './toast.module.scss'
import { Typography } from '../../index'
import { useTransition, animated, SpringValue } from 'react-spring'
import { X } from '../icon/icon-import-handler'
import { ButtonClasses } from '../button/button'

export type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom'

const icons: Partial<{ [key in ToastType]: any }> = {
  error: (
    <Error size={24} color={'#f44336'} stroke={'#f44336'} strokeWidth={0} />
  ),
  success: (
    <CheckCircle
      size={24}
      color={'#4caf50'}
      stroke={'#4caf50'}
      strokeWidth={0}
    />
  ),
}

export interface ToastProps {
  classNames?: ToastClasses
  iconColor?: string
  refCallback?: (ref: HTMLDivElement | null) => void
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

export interface ToastClasses {
  container?: string
  closeButton?: ButtonClasses
  details?: string
  content?: string
  message?: string
  description?: string
  iconContainer?: string
  alertAnimSpin?: string
  textContainer?: string
  detailsContent?: string
  detailsActions?: string
  closeContainer?: string
  life?: string
}

function Toast({
  classNames,
  iconColor,
  refCallback,
  type,
  icon,
  message,
  description,
  closable,
  onClose,
  actions,
  actionsPosition,
  width,
  disableLife,
  life,
  touchScreen,
}: ToastProps) {
  let containerClasses = [ToastStyles['toast-container'], classNames?.container]
  if (type) {
    containerClasses.push(ToastStyles[`toast-container-${type}`])
  }
  if (touchScreen) {
    containerClasses.push(ToastStyles['toast-container-touchscreen'])
  }

  if (width === 'sm' || width === 'md') {
    containerClasses.push(ToastStyles[`toast-container-${width}`])
  }

  let closeButtonClasses = [ToastStyles['toast-close-button']]
  if (type) {
    closeButtonClasses.push(ToastStyles[`toast-close-button-${type}`])
  }

  let detailsClasses = [ToastStyles['toast-details'], classNames?.details]
  if (actionsPosition === 'bottom') {
    detailsClasses.push(ToastStyles[`toast-details-actions-bottom`])
  }

  return (
    <div ref={refCallback} className={containerClasses.join(' ')}>
      <div
        className={[ToastStyles['toast-content'], classNames?.content].join(
          ' '
        )}
      >
        <Typography.Text
          className={[
            ToastStyles['toast-icon-container'],
            classNames?.iconContainer,
          ].join(' ')}
        >
          {type === 'loading' ? (
            <Refresh
              size={24}
              strokeWidth={0}
              className={[
                ToastStyles['alert-anim-spin'],
                classNames?.alertAnimSpin,
              ].join(' ')}
              stroke={iconColor}
              color={iconColor}
            />
          ) : (
            icon || icons[type ?? 'blank']
          )}
        </Typography.Text>
        <div
          className={[
            ToastStyles['toast-text-container'],
            classNames?.textContainer,
          ].join(' ')}
        >
          <div className={detailsClasses.join(' ')}>
            <div
              className={[
                ToastStyles['toast-details__content'],
                classNames?.detailsContent,
              ].join(' ')}
            >
              <div
                className={[
                  ToastStyles['toast-message'],
                  classNames?.message,
                ].join(' ')}
              >
                {message}
              </div>
              {description && (
                <div
                  className={[
                    ToastStyles['toast-description'],
                    classNames?.description,
                  ].join(' ')}
                >
                  {description}
                </div>
              )}
            </div>
            {actions && (
              <div
                className={[
                  ToastStyles['toast-details-actions'],
                  classNames?.detailsActions,
                ].join(' ')}
              >
                {actions}
              </div>
            )}
          </div>
        </div>
        {closable && (
          <div
            className={[
              ToastStyles['toast-close-container'],
              classNames?.closeContainer,
            ].join(' ')}
          >
            <Button
              type={'text'}
              classNames={{
                container: closeButtonClasses.join(' '),
                ...classNames?.closeButton,
              }}
              icon={
                <Close
                  size={24}
                  strokeWidth={0}
                  aria-hidden="true"
                  stroke={iconColor}
                  color={iconColor}
                />
              }
              onClick={onClose}
            />
          </div>
        )}
      </div>
      {!disableLife && life && (
        <animated.div
          className={[ToastStyles['toast-life'], classNames?.life].join(' ')}
          style={{ right: life }}
        />
      )}
    </div>
  )
}

export interface ToastOverlayProps {
  toasts: ToastProps[]
  classNames?: ToastOverlayClasses
  timeout?: number
  align?: 'left' | 'right' | 'center'
  transition?: 'up' | 'down'
  touchScreen?: boolean
}

export interface ToastOverlayClasses {
  root?: string
  overlayContainer?: string
  toast?: ToastClasses
}

export function ToastOverlay({
  toasts,
  classNames,
  timeout = 6000,
  align = 'right',
  transition = 'up',
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
      await next({
        opacity: 1,
        height: refMap.get(item)?.offsetHeight,
      })
      await next({ life: '0%' })
    },
    leave: (item: ToastProps) => async (next, cancel) => {
      await next({ opacity: 0 })
      await next({
        height: 0,
      })
    },
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
    <div className={[ToastStyles['toast-root'], classNames?.root].join(' ')}>
      <div
        className={[
          ToastStyles['toast-overlay-container'],
          ToastStyles[`toast-overlay-container-${align}`],
          ToastStyles[`toast-overlay-container-${transition}`],
          classNames?.overlayContainer,
        ].join(' ')}
      >
        {transitions(({ life, ...style }, item) => (
          <animated.div style={style}>
            <Toast
              {...item}
              classNames={classNames?.toast}
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
