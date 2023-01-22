import React, { useEffect } from 'react'
// @ts-ignore
import ModalStyles from './modal.module.scss'
import { Button, Typography } from '../../index'
import { IconX } from '../icon/icons/icon-x'
import { AnimationTailwindClasses } from '../../types'
import { animated, useTransition } from 'react-spring'

export interface ModalProps {
  classNames?: {
    modalOverlayContainer?: string
    modalOverlay?: string
    modalContainer?: string
    modalFlexContainer?: string
    modal?: string
    modalContent?: string
    modalTitle?: string
    modalDescription?: string
    modalCloseContainer?: string
    modalCloseButton?: string
    modalFooter?: string
    footerContainer?: string
    footerCancelText?: string
  }
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
  overlayClassName?: string
  transition?: AnimationTailwindClasses
  transitionOverlay?: AnimationTailwindClasses
  triggerElement?: React.ReactNode
}

const Modal = ({
  classNames,
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
  overlayClassName,
  triggerElement,
}: ModalProps) => {
  const [open, setOpen] = React.useState(visible ? visible : false)

  useEffect(() => {
    setOpen(visible)
  }, [visible])

  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation()
  }

  let footerClasses = [ModalStyles['modal-footer'], classNames?.modalFooter]
  if (footerBackground) {
    footerClasses.push(ModalStyles['modal-footer-with-bg'])
  }

  let modalClasses = [
    ModalStyles[`modal`],
    ModalStyles[`modal-${size}`],
    classNames?.modal,
  ]

  let overlayClasses = [ModalStyles['modal-overlay'], classNames?.modalOverlay]
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
        <Button type={'default'} onClick={onCancel} disabled={loading}>
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
              classNames?.modalOverlayContainer,
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
                          classNames?.modalContainer,
                        ].join(' ')}
                        onClick={() => (onCancel ? onCancel() : null)}
                      >
                        <div
                          className={[
                            ModalStyles['modal-flex-container'],
                            classNames?.modalFlexContainer,
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
                            <div className={ModalStyles['modal-background']} />
                            <div
                              className={[
                                ModalStyles['modal-content'],
                                classNames?.modalContent,
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
                                          classNames?.modalTitle,
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
                                          classNames?.modalDescription,
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
                            {closable && (
                              <div
                                className={[
                                  ModalStyles['modal-close-container'],
                                  classNames?.modalCloseContainer,
                                ].join(' ')}
                              >
                                <Button
                                  className={[
                                    ModalStyles['modal-close-button'],
                                    classNames?.modalCloseButton,
                                  ].join(' ')}
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
            </div>
          </div>
        </animated.div>
      )
  )
}

export default Modal
