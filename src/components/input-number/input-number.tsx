import React from 'react'
import { FormLayout, FormLayoutClasses } from '../../lib/layout/form-layout'
import InputErrorIcon from '../../lib/layout/input-error-icon'
import { Add, Remove, ErrorOutline } from '../icon/icons/line'
import InputIconContainer from '../../lib/layout/input-icon-container'
// @ts-ignore
import InputNumberStyles from './input-number.module.scss'
import Button, { ButtonClasses } from '../button/button'
import { RipplesProps } from 'react-ripples'

export interface InputNumberClasses {
  formLayout?: FormLayoutClasses
  container?: string
  input?: string
  icon?: string
  error?: string
  withIcon?: string
  borderless?: string
  button?: ButtonClasses
}

export interface InputNumberProps {
  iconColor?: string
  autoComplete?: string
  autofocus?: boolean
  classNames?: InputNumberClasses
  defaultValue?: string | number
  touchScreen?: boolean
  descriptionText?: string
  disabled?: boolean
  error?: string
  icon?: any
  id?: string
  inputRef?: React.RefObject<HTMLInputElement>
  label?: string
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  name?: string
  rippleProps?: RipplesProps
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void
  onFocus?(x: React.FocusEvent<HTMLInputElement>): void
  onBlur?(x: React.FocusEvent<HTMLInputElement>): void
  onKeyDown?(x: React.KeyboardEvent<HTMLInputElement>): void
  placeholder?: string
  style?: React.CSSProperties
  value?: string
  min?: number
  max?: number
  borderless?: boolean
}

function InputNumber({
  iconColor = '#ffffff',
  autoComplete,
  autofocus,
  classNames,
  defaultValue,
  touchScreen,
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
  rippleProps,
  name,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  placeholder,
  value = '0',
  style,
  min,
  max,
  borderless = false,
}: InputNumberProps) {
  const inputClasses = [InputNumberStyles['inputnumber'], classNames?.input]
  const inputRefCurrent = inputRef
    ? inputRef
    : React.createRef<HTMLInputElement>()

  const iconClasses = [InputNumberStyles['inputnumber-icon'], classNames?.icon]

  if (error)
    inputClasses.push(InputNumberStyles['inputnumber-error'], classNames?.error)

  if (icon)
    inputClasses.push(
      InputNumberStyles['inputnumber-with-icon'],
      classNames?.withIcon
    )

  if (borderless)
    inputClasses.push(
      InputNumberStyles['inputnumber-borderless'],
      classNames?.borderless
    )

  const onIncrement = () => {
    if (!inputRefCurrent.current) {
      return
    }

    inputRefCurrent.current.stepUp()
    if (onChange) {
      inputRefCurrent.current?.dispatchEvent(
        new InputEvent('change', {
          view: window,
          bubbles: true,
          cancelable: false,
        })
      )
    }
  }

  const onDecrement = () => {
    if (!inputRefCurrent.current) {
      return
    }

    inputRefCurrent.current.stepDown()
    if (onChange) {
      inputRefCurrent.current?.dispatchEvent(
        new InputEvent('change', {
          view: window,
          bubbles: true,
          cancelable: false,
        })
      )
    }
  }

  return (
    <FormLayout
      classNames={classNames?.formLayout}
      label={label}
      afterLabel={afterLabel}
      beforeLabel={beforeLabel}
      labelOptional={labelOptional}
      id={id}
      error={error}
      descriptionText={descriptionText}
      style={style}
    >
      <div
        className={[InputNumberStyles['container'], classNames?.container].join(
          ' '
        )}
      >
        <input
          autoComplete={autoComplete}
          autoFocus={autofocus}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          name={name}
          onInput={(e) => {
            if (
              parseInt(e.currentTarget.value) > parseInt(e.currentTarget.max)
            ) {
              e.currentTarget.value = e.currentTarget.max
            }

            if (
              parseInt(e.currentTarget.value) < parseInt(e.currentTarget.min)
            ) {
              e.currentTarget.value = e.currentTarget.min
            }
          }}
          onChange={onChange ? (event) => onChange(event) : undefined}
          onFocus={onFocus ? (event) => onFocus(event) : undefined}
          onBlur={onBlur ? (event) => onBlur(event) : undefined}
          onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
          placeholder={placeholder}
          ref={inputRefCurrent}
          type={'number'}
          value={value}
          className={inputClasses.join(' ')}
          min={min}
          max={max}
        />
        <div className={iconClasses.join(' ')}>
          <Button
            touchScreen={touchScreen}
            classNames={classNames?.button}
            rippleProps={rippleProps}
            rounded={true}
            type={'text'}
            onClick={onDecrement}
            icon={<Remove size={18} color={iconColor} stroke={iconColor} />}
          />
          <Button
            touchScreen={touchScreen}
            classNames={classNames?.button}
            rippleProps={rippleProps}
            rounded={true}
            type={'text'}
            onClick={onIncrement}
            icon={<Add size={18} color={iconColor} stroke={iconColor} />}
          />
          {icon && <InputIconContainer icon={icon} />}
          {error && (
            <ErrorOutline size={24} color={'#ff0000'} strokeWidth={0} />
          )}
        </div>
      </div>
    </FormLayout>
  )
}

export default InputNumber
