import React, { useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
import {
  Button,
  Space,
  Typography,
  IconCopy,
  IconEye,
  IconEyeOff,
} from '../../index'
// @ts-ignore
import InputStyles from './Input.module.css'
import { animated, useSpring } from 'react-spring'

export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  borderless?: boolean
  shakeInterpolationCount?: number
  shakeDistance?: number
}

function Input({
  autoComplete,
  autoFocus,
  className,
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
  size = 'medium',
  borderless = false,
  shakeInterpolationCount = 3,
  shakeDistance = 6,
  ...props
}: Props) {
  const [copyLabel, setCopyLabel] = useState('Copy')
  const [hidden, setHidden] = useState(true)

  // if `type` is not assigned, default to text input
  if (!type) {
    type = 'text'
  }

  let inputClasses = [InputStyles['sbui-input']]
  if (error) inputClasses.push(InputStyles['sbui-input--error'])
  if (icon) inputClasses.push(InputStyles['sbui-input--with-icon'])
  if (size) inputClasses.push(InputStyles[`sbui-input--${size}`])
  if (borderless) inputClasses.push(InputStyles['sbui-input--borderless'])

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
      className={className}
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
        size={size}
      >
        <div className={InputStyles['sbui-input-container']}>
          {icon && <InputIconContainer icon={icon} />}
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
            className={inputClasses.join(' ')}
          />
          {copy || error || actions || password ? (
            <Space
              className={InputStyles['sbui-input-actions-container']}
              size={1}
            >
              {reveal ? (
                <Button
                  htmlType={'button'}
                  size={'tiny'}
                  type={'text'}
                  icon={hidden ? <IconEye /> : <IconEyeOff />}
                  onClick={onReveal}
                />
              ) : null}
              {error && <InputErrorIcon size={size} />}
              {copy && !(reveal && hidden) ? (
                <Button
                  htmlType={'button'}
                  size="tiny"
                  type="default"
                  onClick={() => onCopy(value)}
                  icon={<IconCopy />}
                >
                  {copyLabel}
                </Button>
              ) : null}
              {actions && actions}
            </Space>
          ) : null}
        </div>
      </FormLayout>
    </animated.div>
  )
}

export interface TextAreaProps {
  className?: string
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
  className,
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
  size,
  borderless = false,
  shakeInterpolationCount = 3,
  shakeDistance = 6,
}: TextAreaProps) {
  const [charLength, setCharLength] = useState(0)

  let classes = [InputStyles['sbui-input']]
  if (error) classes.push(InputStyles['sbui-input--error'])
  if (icon) classes.push(InputStyles['sbui-input--with-icon'])
  if (size) classes.push(InputStyles[`sbui-input--${size}`])
  if (borderless) classes.push(InputStyles['sbui-input--borderless'])

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

  const interpolation: number[] = []
  interpolation.push(0)

  for (let i = 0; i < shakeInterpolationCount; i++) {
    interpolation.push(-shakeDistance)
    interpolation.push(shakeDistance)
  }

  interpolation.push(0)

  return (
    <animated.div
      className={className}
      style={{
        x: x.to([0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1], interpolation),
      }}
    >
      <FormLayout
        className={className}
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
        <div className={InputStyles['sbui-input-container']}>
          <textarea
            autoComplete={autoComplete ? 'on' : 'off'}
            autoFocus={autofocus}
            disabled={disabled}
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
            className={classes.join(' ')}
            maxLength={limit}
          >
            {value}
          </textarea>
          {error ? (
            <Space
              className={InputStyles['sbui-input-actions-container']}
              size={1}
            >
              {error && <InputErrorIcon size={size} />}
            </Space>
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
