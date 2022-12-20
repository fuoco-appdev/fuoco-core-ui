import React from 'react'
// @ts-ignore
import FormLayoutStyles from './form-layout.module.scss'

export interface FormLayoutClasses {
  root?: string
  flex?: string
  flexLeft?: string
  flexRight?: string
  labelContainerHorizontal?: string
  labelContainerVertical?: string
  label?: string
  labelBefore?: string
  labelAfter?: string
  labelOpt?: string
  contentContainerHorizontal?: string
  contentContainerVertical?: string
  contentContainerVerticalAlignRight?: string
  error?: string
  description?: string
}

type Props = {
  align?: string
  children?: any
  classNames?: FormLayoutClasses
  descriptionText?: string
  error?: string
  id?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
  flex?: boolean
  responsive?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  beforeLabel?: string
  afterLabel?: string
}

export function FormLayout({
  align,
  children,
  classNames,
  descriptionText,
  error,
  id,
  label,
  labelOptional,
  layout = 'vertical',
  style,
  flex,
  responsive = true,
  size = 'medium',
  beforeLabel,
  afterLabel,
}: Props) {
  let containerClasses = [FormLayoutStyles['formlayout'], classNames?.root]

  if (size) {
    containerClasses.push(FormLayoutStyles[`formlayout-${size}`])
  }

  if (flex) {
    containerClasses.push(FormLayoutStyles['formlayout-flex'], classNames?.flex)
    if (align === 'left') {
      containerClasses.push(
        FormLayoutStyles['formlayout-flex-left'],
        classNames?.flexLeft
      )
    }
    if (align === 'right') {
      containerClasses.push(
        FormLayoutStyles['formlayout-flex-right'],
        classNames?.flexRight
      )
    }
  }

  const labelled = Boolean(label || beforeLabel || afterLabel)

  return (
    <div className={containerClasses.join(' ')}>
      {labelled || labelOptional || layout === 'horizontal' ? (
        <div
          className={
            '' +
            (layout !== 'horizontal' && !flex
              ? [
                  FormLayoutStyles['formlayout-label-container-horizontal'],
                  classNames?.labelContainerHorizontal,
                ].join(' ')
              : [
                  FormLayoutStyles['formlayout-label-container-vertical'],
                  classNames?.labelContainerVertical,
                ].join(' '))
          }
        >
          {labelled && (
            <label
              className={[
                FormLayoutStyles['formlayout-label'],
                classNames?.label,
              ].join(' ')}
              htmlFor={id}
            >
              {beforeLabel && (
                <span
                  className={[
                    FormLayoutStyles['formlayout-label-before'],
                    classNames?.labelBefore,
                  ].join(' ')}
                  id={id + '-before'}
                >
                  {beforeLabel}
                </span>
              )}
              {label}
              {afterLabel && (
                <span
                  className={[
                    FormLayoutStyles['formlayout-label-after'],
                    classNames?.labelAfter,
                  ].join(' ')}
                  id={id + '-after'}
                >
                  {afterLabel}
                </span>
              )}
            </label>
          )}
          {labelOptional && (
            <span
              className={[
                FormLayoutStyles['formlayout-label-opt'],
                classNames?.labelOpt,
              ].join(' ')}
              id={id + '-optional'}
            >
              {labelOptional}
            </span>
          )}
        </div>
      ) : null}
      <div
        className={
          layout !== 'horizontal'
            ? [
                FormLayoutStyles['formlayout-content-container-horizontal'],
                classNames?.contentContainerHorizontal,
              ].join(' ')
            : [
                FormLayoutStyles['formlayout-content-container-vertical'],
                classNames?.contentContainerVertical,
              ].join(' ') +
              (align === 'right'
                ? ` ${[
                    FormLayoutStyles[
                      'formlayout-content-container-vertical-align-right'
                    ],
                    classNames?.contentContainerVerticalAlignRight,
                  ].join(' ')}`
                : '')
        }
        style={style}
      >
        {children}
        {error && (
          <p
            className={[
              FormLayoutStyles['formlayout-error'],
              classNames?.error,
            ].join(' ')}
          >
            {error}
          </p>
        )}
        {descriptionText && (
          <p
            className={[
              FormLayoutStyles['formlayout-description'],
              classNames?.description,
            ].join(' ')}
            id={id + '-description'}
          >
            {descriptionText}
          </p>
        )}
      </div>
    </div>
  )
}
