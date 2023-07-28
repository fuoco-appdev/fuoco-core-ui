import React, { useEffect } from 'react'
// @ts-ignore
import ModalStyles from './modal.module.scss'
import { Button, Typography } from '../../index'
import { Close } from '../icon/icons/line'
import { AnimationTailwindClasses } from '../../types'
import { animated, useTransition } from 'react-spring'
import { ButtonClasses } from '../button/button'

export interface ModalClasses {
  overlayContainer?: string
  overlay?: string
  container?: string
  flexContainer?: string
  background?: string
  modal?: string
  content?: string
  title?: string
  description?: string
  cancelButton?: ButtonClasses
  confirmButton?: ButtonClasses
  footer?: string
  footerContainer?: string
  footerCancelText?: string
}

export interface ModalProps {
  classNames?: ModalClasses
  iconColor?: string
  children?: React.ReactNode
  customFooter?: React.ReactNode
  description?: string
  hideFooter?: boolean
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
  visible?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
  style?: React.CSSProperties
  overlayStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
  overlayClassName?: string
  transition?: AnimationTailwindClasses
  transitionOverlay?: AnimationTailwindClasses
}

const Modal = ({
  classNames,
  iconColor = '#ffffff',
  children,
  customFooter = undefined,
  description,
  hideFooter = false,
  loading = false,
  cancelText = 'Cancel',
  onConfirm = () => {},
  onCancel = () => {},
  confirmText = 'Confirm',
  title,
  footerBackground,
  icon,
  variant = 'success',
  visible = false,
  size = 'large',
  style,
  overlayStyle,
  contentStyle,
  overlayClassName,
}: ModalProps) => {
  const [open, setOpen] = React.useState(visible ? visible : false)

  useEffect(() => {
    setOpen(visible)
  }, [visible])

  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation()
  }

  let footerClasses = [ModalStyles['modal-footer'], classNames?.footer]
  if (footerBackground) {
    footerClasses.push(ModalStyles['modal-footer-with-bg'])
  }

  let modalClasses = [
    ModalStyles[`modal`],
    ModalStyles[`modal-${size}`],
    classNames?.modal,
  ]

  let overlayClasses = [ModalStyles['modal-overlay'], classNames?.overlay]
  if (overlayClassName) overlayClasses.push(overlayClassName)

  const footerContent = customFooter ? (
    customFooter
  ) : (
    <div
      className={[
        ModalStyles['footer-container'],
        classNames?.footerContainer,
      ].join(' ')}
    >
      <div className={ModalStyles['footer-button-container']}>
        <Button
          classNames={classNames?.cancelButton}
          type={'default'}
          onClick={onCancel}
          disabled={loading}
        >
          <span
            className={[
              ModalStyles['footer-cancel-text'],
              classNames?.footerCancelText,
            ].join(' ')}
          >
            {cancelText}
          </span>
        </Button>
        <Button
          classNames={classNames?.confirmButton}
          onClick={onConfirm}
          loading={loading}
          danger={variant === 'danger'}
        >
          {confirmText}
        </Button>
      </div>
    </div>
  )

  useEffect(() => {
    if (visible !== undefined && !visible) {
      // controlled component behaviour
      onCancel()
    } else {
      // un-controlled component behaviour
      setOpen(visible)
    }
  }, [visible])

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

  return transitionOverlay(
    (transitionStyle, item) =>
      item && (
        <animated.div style={transitionStyle}>
          <div
            className={[
              ModalStyles['modal-overlay-container'],
              classNames?.overlayContainer,
            ].join(' ')}
          >
            <div className={overlayClasses.join(' ')} style={overlayStyle}>
              {transition(
                (transitionStyle, item) =>
                  item && (
                    <animated.div style={transitionStyle}>
                      <div
                        className={[
                          ModalStyles['modal-container'],
                          classNames?.container,
                        ].join(' ')}
                        onClick={() => (onCancel ? onCancel() : null)}
                      >
                        <div
                          className={[
                            ModalStyles['modal-flex-container'],
                            classNames?.flexContainer,
                          ].join(' ')}
                        >
                          <div
                            className={modalClasses.join(' ')}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                            onClick={stopPropagation}
                            style={style}
                          >
                            <div
                              className={[
                                ModalStyles['modal-background'],
                                classNames?.background,
                              ].join(' ')}
                            />
                            <div
                              className={[
                                ModalStyles['modal-content'],
                                classNames?.content,
                              ].join(' ')}
                              style={contentStyle}
                            >
                              {title || description || icon ? (
                                <div className={ModalStyles['modal-text']}>
                                  {icon ? icon : null}
                                  <span>
                                    {title && (
                                      <Typography.Title
                                        className={[
                                          ModalStyles['modal-title'],
                                          classNames?.title,
                                        ].join(' ')}
                                        level={4}
                                      >
                                        {title}
                                      </Typography.Title>
                                    )}
                                    {description && (
                                      <Typography.Text
                                        className={[
                                          ModalStyles['modal-description'],
                                          classNames?.description,
                                        ].join(' ')}
                                      >
                                        {description}
                                      </Typography.Text>
                                    )}
                                  </span>
                                  {children}
                                </div>
                              ) : (
                                children
                              )}
                            </div>
                            {!footerBackground && !hideFooter && footerContent}
                            {!hideFooter && footerBackground && (
                              <div className={footerClasses.join(' ')}>
                                {footerContent}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </animated.div>
                  )
              )}
            </div>
          </div>
        </animated.div>
      )
  )
}

export default Modal
