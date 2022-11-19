import React, { useEffect } from 'react'
// @ts-ignore
import ModalStyles from './Modal.module.css'
import { Button, IconX, Typography, Space } from './../../index'
import { AnimationTailwindClasses } from '../../types'
import { animated, useTransition } from 'react-spring'
import * as Dialog from '@radix-ui/react-dialog'

import { Transition } from '@headlessui/react'

// import { Transition } from '@tailwindui/react'

export interface Props {
  children?: React.ReactNode
  customFooter?: React.ReactNode
  closable?: boolean
  description?: string
  hideFooter?: boolean
  alignFooter?: 'right' | 'left'
  layout?: 'horizontal' | 'vertical'
  icon?: React.ReactNode
  loading?: boolean
  onCancel?: any
  cancelText?: string
  onConfirm?: any
  confirmText?: string
  showIcon?: boolean
  footerBackground?: boolean
  title?: string
  variant?: 'danger' | 'warning' | 'success'
  visible: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
  style?: React.CSSProperties
  overlayStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
  className?: string
  overlayClassName?: string
  transition?: AnimationTailwindClasses
  transitionOverlay?: AnimationTailwindClasses
  triggerElement?: React.ReactNode
}

const Modal = ({
  children,
  customFooter = undefined,
  closable,
  description,
  hideFooter = false,
  alignFooter = 'left',
  layout = 'horizontal',
  loading = false,
  cancelText = 'Cancel',
  onConfirm = () => {},
  onCancel = () => {},
  confirmText = 'Confirm',
  showIcon = false,
  title,
  footerBackground,
  icon,
  variant = 'success',
  visible = false,
  size = 'large',
  style,
  overlayStyle,
  contentStyle,
  className = '',
  overlayClassName,
  triggerElement,
}: Props) => {
  const [open, setOpen] = React.useState(visible ? visible : false)

  useEffect(() => {
    setOpen(visible)
  }, [visible])

  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation()
  }

  let footerClasses = [ModalStyles['sbui-modal-footer']]
  if (footerBackground) {
    footerClasses.push(ModalStyles['sbui-modal-footer--with-bg'])
  }

  let modalClasses = [
    ModalStyles[`sbui-modal`],
    ModalStyles[`sbui-modal--${size}`],
  ]
  if (className) modalClasses.push(className)

  let overlayClasses = [ModalStyles['sbui-modal-overlay']]
  if (overlayClassName) overlayClasses.push(overlayClassName)

  const footerContent = customFooter ? (
    customFooter
  ) : (
    <div className={ModalStyles['sbui-footer-container']}>
      <Button type="outline" onClick={onCancel} disabled={loading}>
        <span className={ModalStyles['sbui-footer-cancel-text']}>
          {cancelText}
        </span>
      </Button>
      <Button
        onClick={onConfirm}
        loading={loading}
        danger={variant === 'danger'}
      >
        {confirmText}
      </Button>
    </div>
  )

  function handleOpenChange(open: boolean) {
    if (visible !== undefined && !open) {
      // controlled component behaviour
      onCancel()
    } else {
      // un-controlled component behaviour
      setOpen(open)
    }
  }

  const transitionOverlay = useTransition(open, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: {
      tension: 1000,
      friction: 10,
      bounce: 0,
    },
  })

  const transition = useTransition(open, {
    from: {
      scale: 0.5,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
    leave: {
      scale: 0.5,
      opacity: 0,
    },
    config: {
      tension: 1000,
      friction: 30,
      bounce: 0,
    },
  })

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      {triggerElement && (
        <Dialog.Trigger className={ModalStyles[`sbui-modal__trigger`]}>
          {triggerElement}
        </Dialog.Trigger>
      )}
      <Dialog.Overlay>
        {transitionOverlay(
          (transitionStyle, item) =>
            item && (
              <animated.div style={transitionStyle}>
                <div className={ModalStyles['sbui-modal-overlay-container']}>
                  <div
                    className={overlayClasses.join(' ')}
                    style={overlayStyle}
                  ></div>
                </div>
              </animated.div>
            )
        )}
      </Dialog.Overlay>
      <Dialog.Content forceMount style={{ width: '100vw' }}>
        {transition(
          (transitionStyle, item) =>
            item && (
              <animated.div style={transitionStyle}>
                <div
                  className={
                    ModalStyles['sbui-modal-container'] + ' ' + className
                  }
                  onClick={() => (onCancel ? onCancel() : null)}
                >
                  <div className={ModalStyles['sbui-modal-flex-container']}>
                    <div
                      className={modalClasses.join(' ')}
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="modal-headline"
                      onClick={stopPropagation}
                      style={style}
                    >
                      <div>
                        <div
                          className={ModalStyles['sbui-modal-content']}
                          style={contentStyle}
                        >
                          {icon ? icon : null}
                          <span style={{ width: 'inherit' }}>
                            {title && (
                              <Typography.Title
                                className={ModalStyles['sbui-modal-title']}
                                level={4}
                              >
                                {title}
                              </Typography.Title>
                            )}
                            {description && (
                              <Typography.Text
                                className={
                                  ModalStyles['sbui-modal-description']
                                }
                              >
                                {description}
                              </Typography.Text>
                            )}
                          </span>

                          {children}
                        </div>
                        {!footerBackground && !hideFooter && footerContent}
                      </div>
                      {!hideFooter && footerBackground && (
                        <div className={footerClasses.join(' ')}>
                          {footerContent}
                        </div>
                      )}
                      {closable && (
                        <div
                          className={ModalStyles['sbui-modal-close-container']}
                        >
                          <Button
                            className={ModalStyles['sbui-modal-close-button']}
                            onClick={onCancel}
                            type="text"
                            shadow={false}
                            icon={<IconX size="medium" />}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </animated.div>
            )
        )}
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default Modal
