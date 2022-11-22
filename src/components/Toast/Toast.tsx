import React, {
  ComponentProps,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { IconCheck } from '../icon/icons/icon-check'
import { IconLoader } from '../icon/icons/icon-loader'
import { IconX } from '../icon/icons/icon-x'
import { IconAlertCircle } from '../icon/icons/icon-alert-circle'
import { Button } from '../button/index'
// @ts-ignore
import ToastStyles from './toast.module.css'
import Typography from '../typography'
import { useTransition, animated, SpringValue } from 'react-spring'
import { X } from '../icon/icon-import-handler'

export type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom'

const icons: Partial<{ [key in ToastType]: any }> = {
  error: <IconAlertCircle size="medium" strokeWidth={2} />,
  success: <IconCheck size="medium" strokeWidth={2} />,
}

export interface ToastProps {
  key: string
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
}

function Message({
  children,
  ...props
}: ComponentProps<typeof Typography.Text>) {
  return (
    <Typography.Text className={ToastStyles['sbui-toast-message']} {...props}>
      {children}
    </Typography.Text>
  )
}

function Description({
  children,
  ...props
}: ComponentProps<typeof Typography.Text>) {
  return (
    <Typography.Text
      className={ToastStyles['sbui-toast-description']}
      {...props}
    >
      {children}
    </Typography.Text>
  )
}

function Toast(props: ToastProps) {
  let containerClasses = [ToastStyles['sbui-toast-container']]
  if (props.type) {
    containerClasses.push(ToastStyles[`sbui-toast-container--${props.type}`])
  }
  if (props.width === 'sm' || props.width === 'md') {
    containerClasses.push(ToastStyles[`sbui-toast-container--${props.width}`])
  }

  let closeButtonClasses = [ToastStyles['sbui-toast-close-button']]
  if (props.type) {
    closeButtonClasses.push(
      ToastStyles[`sbui-toast-close-button--${props.type}`]
    )
  }

  let detailsClasses = [ToastStyles['sbui-toast-details']]
  if (props.actionsPosition === 'bottom') {
    detailsClasses.push(ToastStyles[`sbui-toast-details--actions-bottom`])
  }

  return (
    <div ref={props?.refCallback} className={containerClasses.join(' ')}>
      <div className={ToastStyles['sbui-toast-content']}>
        <Typography.Text className={ToastStyles['sbui-toast-icon-container']}>
          {props.type === 'loading' ? (
            <IconLoader
              size="medium"
              strokeWidth={2}
              className={ToastStyles['sbui-alert--anim--spin']}
            />
          ) : (
            props.icon || icons[props.type ?? 'blank']
          )}
        </Typography.Text>
        <div className={ToastStyles['sbui-toast-text-container']}>
          <div className={detailsClasses.join(' ')}>
            <div className={ToastStyles['sbui-toast-details__content']}>
              <Message>{props.message}</Message>
              {props.description && (
                <Description>{props.description}</Description>
              )}
            </div>
            {props.actions && (
              <div className={ToastStyles['sbui-toast-details__actions']}>
                {props.actions}
              </div>
            )}
          </div>
        </div>
        {props.closable && (
          <div className={ToastStyles['sbui-toast-close-container']}>
            <Button
              type={'text'}
              className={closeButtonClasses.join(' ')}
              icon={
                <IconX
                  className="h-5 w-5"
                  aria-hidden="true"
                  size="small"
                  strokeWidth={2}
                />
              }
              onClick={props.onClose}
            />
          </div>
        )}
      </div>
      {!props.disableLife && props.life && (
        <animated.div
          className={ToastStyles['sbui-toast-life']}
          style={{ right: props.life }}
        />
      )}
    </div>
  )
}

interface ToastOverlayProps {
  toasts: ToastProps[]
  timeout: number
}

export function ToastOverlay({ toasts, timeout = 6000 }: ToastOverlayProps) {
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
    <div className={ToastStyles['sbui-toast-root']}>
      <div className={ToastStyles['sbui-toast-overlay-container']}>
        {transitions(({ life, ...style }, item) => (
          <animated.div style={style}>
            <Toast
              {...item}
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
