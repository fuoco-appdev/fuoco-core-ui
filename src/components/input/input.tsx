import React, { useState } from 'react'
import { FormLayout, FormLayoutClasses } from '../../lib/layout/form-layout'
import { Button, Typography } from '../../index'
import {
  Visibility,
  VisibilityOff,
  ContentCopy,
  ErrorOutline,
} from '../icon/icons/line'
// @ts-ignore
import InputStyles from './input.module.scss'
import { animated, useSpring } from 'react-spring'
import { ButtonClasses } from '../button/button'
import { RipplesProps } from 'react-ripples'

export interface InputClasses {
  root?: string
  container?: string
  error?: string
  withIcon?: string
  borderless?: string
  iconContainer?: string
  input?: string
  actionsContainer?: string
  formLayout?: FormLayoutClasses
  revealButton?: ButtonClasses
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  classNames?: InputClasses
  rippleProps?: RipplesProps
  iconColor?: string
  copy?: boolean
  password?: boolean
  defaultValue?: string | number
  descriptionText?: string
  disabled?: boolean
  error?: string
  icon?: any
  inputRef?: string
  label?: string
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  name?: string
  reveal?: boolean
  actions?: React.ReactNode
  borderless?: boolean
  shakeInterpolationCount?: number
  shakeDistance?: number
}

function Input({
  autoComplete,
  autoFocus,
  classNames,
  rippleProps,
  iconColor = '#ffffff',
  copy,
  password,
  defaultValue,
  descriptionText,
  disabled,
  error,
  icon,
  id,
  inputRef,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  layout,
  name,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  placeholder,
  type,
  value,
  style,
  reveal = false,
  actions,
  borderless = false,
  shakeInterpolationCount = 3,
  shakeDistance = 6,
  ...props
}: InputProps) {
  const [copyLabel, setCopyLabel] = useState('Copy')
  const [hidden, setHidden] = useState(true)

  // if `type` is not assigned, default to text input
  if (!type) {
    type = 'text'
  }

  let inputContainerClasses = [
    InputStyles['input-container'],
    classNames?.container,
  ]
  if (error)
    inputContainerClasses.push(InputStyles['input-error'], classNames?.error)
  if (icon)
    inputContainerClasses.push(
      InputStyles['input-with-icon'],
      classNames?.withIcon
    )
  if (borderless)
    inputContainerClasses.push(
      InputStyles['input-borderless'],
      classNames?.borderless
    )

  function onCopy(value: any) {
    navigator.clipboard.writeText(value).then(
      function () {
        /* clipboard successfully set */
        setCopyLabel('Copied')
        setTimeout(function () {
          setCopyLabel('Copy')
        }, 3000)
      },
      function () {
        /* clipboard write failed */
        setCopyLabel('Failed to copy')
      }
    )
  }

  function onReveal() {
    setHidden(!hidden)
  }

  const { x } = useSpring({
    from: { x: 0 },
    to: error ? { x: 1 } : { x: 0 },
    config: { mass: 1, tension: 500, friction: 100 },
  })

  const interpolation: number[] = []
  interpolation.push(0)

  for (let i = 0; i < shakeInterpolationCount; i++) {
    interpolation.push(-shakeDistance)
    interpolation.push(shakeDistance)
  }

  interpolation.push(0)

  return (
    <animated.div
      className={classNames?.root}
      style={{
        x: x.to([0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1], interpolation),
      }}
    >
      <FormLayout
        label={label}
        afterLabel={afterLabel}
        beforeLabel={beforeLabel}
        labelOptional={labelOptional}
        layout={layout}
        id={id}
        error={error}
        descriptionText={descriptionText}
        style={style}
        classNames={classNames?.formLayout}
      >
        <div className={inputContainerClasses.join(' ')}>
          {icon && (
            <div
              className={[
                InputStyles['icon-container'],
                classNames?.iconContainer,
              ].join(' ')}
            >
              {icon}
            </div>
          )}
          <input
            {...props}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            name={name}
            onChange={onChange ? (event) => onChange(event) : undefined}
            onFocus={onFocus ? (event) => onFocus(event) : undefined}
            onBlur={onBlur ? (event) => onBlur(event) : undefined}
            onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
            placeholder={placeholder}
            ref={inputRef}
            type={password ? (hidden ? 'password' : type) : type}
            value={value}
            className={[InputStyles['input'], classNames?.input].join(' ')}
          />
          {copy || error || actions || password ? (
            <div
              className={[
                InputStyles['input-actions-container'],
                classNames?.actionsContainer,
              ].join(' ')}
            >
              {reveal ? (
                <Button
                  tabIndex={-1}
                  rippleProps={rippleProps}
                  classNames={classNames?.revealButton}
                  htmlType={'button'}
                  size={'tiny'}
                  type={'text'}
                  rounded={true}
                  icon={
                    hidden ? (
                      <Visibility
                        size={24}
                        strokeWidth={0}
                        color={iconColor}
                        stroke={iconColor}
                      />
                    ) : (
                      <VisibilityOff
                        size={24}
                        strokeWidth={0}
                        color={iconColor}
                        stroke={iconColor}
                      />
                    )
                  }
                  onClick={onReveal}
                />
              ) : null}
              {error && (
                <ErrorOutline
                  size={24}
                  color={'#FF0000'}
                  strokeWidth={0}
                  className={InputStyles['error-icon']}
                />
              )}
              {copy && !(reveal && hidden) ? (
                <Button
                  tabIndex={-1}
                  rippleProps={rippleProps}
                  htmlType={'button'}
                  size="tiny"
                  type="default"
                  rounded={true}
                  onClick={() => onCopy(value)}
                  icon={
                    <ContentCopy
                      size={24}
                      strokeWidth={0}
                      color={iconColor}
                      stroke={iconColor}
                    />
                  }
                >
                  {copyLabel}
                </Button>
              ) : null}
              {actions && actions}
            </div>
          ) : null}
        </div>
      </FormLayout>
    </animated.div>
  )
}

export interface TextAreaClasses {
  root?: string
  formLayout?: TextAreaClasses
  inputContainer?: string
  input?: string
  inputError?: string
  inputWithIcon?: string
  inputBorderless?: string
  inputActionsContainer?: string
}

export interface TextAreaProps {
  classNames?: TextAreaClasses
  autoComplete?: boolean
  autofocus?: boolean
  descriptionText?: string
  disabled?: boolean
  error?: string
  icon?: any
  id?: string
  label?: string
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  name?: string
  onChange?(x: React.ChangeEvent<HTMLTextAreaElement>): void
  onFocus?(x: React.FocusEvent<HTMLTextAreaElement>): void
  onBlur?(x: React.FocusEvent<HTMLTextAreaElement>): void
  onKeyDown?(x: React.KeyboardEvent<HTMLTextAreaElement>): void
  placeholder?: string
  value?: any
  style?: React.CSSProperties
  rows?: number
  limit?: number
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  borderless?: boolean
  shakeInterpolationCount?: number
  shakeDistance?: number
}

function TextArea({
  autoComplete,
  autofocus,
  classNames,
  descriptionText,
  disabled,
  error,
  icon,
  id,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  layout,
  name,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  placeholder,
  value,
  style,
  rows = 4,
  limit,
  size = 'medium',
  borderless = false,
  shakeInterpolationCount = 3,
  shakeDistance = 6,
}: TextAreaProps) {
  const [charLength, setCharLength] = useState(0)

  let classes = [InputStyles['input'], classNames?.input]
  if (error) classes.push(InputStyles['input-error'], classNames?.inputError)
  if (icon)
    classes.push(InputStyles['input-with-icon'], classNames?.inputWithIcon)
  if (size) classes.push(InputStyles[`input-${size}`])
  if (borderless)
    classes.push(InputStyles['input-borderless'], classNames?.inputBorderless)

  function onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCharLength(e.target.value.length)
    if (onChange) {
      onChange(e)
    }
  }

  const { x } = useSpring({
    from: { x: 0 },
    to: error ? { x: 1 } : { x: 0 },
    config: { mass: 1, tension: 500, friction: 100 },
  })

  let inputContainerClasses = [
    InputStyles['input-container'],
    classNames?.inputContainer,
  ]
  if (error)
    inputContainerClasses.push(
      InputStyles['input-error'],
      classNames?.inputError
    )
  if (icon)
    inputContainerClasses.push(
      InputStyles['input-with-icon'],
      classNames?.inputWithIcon
    )
  if (size) inputContainerClasses.push(InputStyles[`input-${size}`])
  if (borderless)
    inputContainerClasses.push(
      InputStyles['input-borderless'],
      classNames?.inputBorderless
    )

  const interpolation: number[] = []
  interpolation.push(0)

  for (let i = 0; i < shakeInterpolationCount; i++) {
    interpolation.push(-shakeDistance)
    interpolation.push(shakeDistance)
  }

  interpolation.push(0)

  return (
    <animated.div
      className={classNames?.root}
      style={{
        x: x.to([0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1], interpolation),
      }}
    >
      <FormLayout
        classNames={classNames?.formLayout}
        label={label}
        afterLabel={afterLabel}
        beforeLabel={beforeLabel}
        labelOptional={labelOptional}
        layout={layout}
        id={id}
        error={error}
        descriptionText={descriptionText}
        style={style}
        size={size}
      >
        <div className={inputContainerClasses.join(' ')}>
          <textarea
            autoComplete={autoComplete ? 'on' : 'off'}
            autoFocus={autofocus}
            disabled={disabled}
            draggable={false}
            id={id}
            name={name}
            rows={rows}
            cols={100}
            placeholder={placeholder}
            onChange={onInputChange}
            onFocus={onFocus ? (event) => onFocus(event) : undefined}
            onBlur={onBlur ? (event) => onBlur(event) : undefined}
            onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
            value={value}
            className={[InputStyles['input'], classNames?.input].join(' ')}
            maxLength={limit}
          >
            {value}
          </textarea>
          {error ? (
            <div
              className={[
                InputStyles['input-actions-container'],
                classNames?.inputActionsContainer,
              ].join(' ')}
            >
              {error && (
                <ErrorOutline
                  size={24}
                  strokeWidth={0}
                  color={'#FF0000'}
                  className={InputStyles['error-icon']}
                />
              )}
            </div>
          ) : null}
        </div>

        {limit && (
          <Typography.Text
            type="secondary"
            style={{ marginTop: '0.5rem', display: 'block' }}
          >
            {charLength}/{limit}
          </Typography.Text>
        )}
      </FormLayout>
    </animated.div>
  )
}

Input.TextArea = TextArea

export default Input
