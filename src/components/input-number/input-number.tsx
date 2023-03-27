import React from 'react'
import { FormLayout } from '../../lib/layout/form-layout'
import InputErrorIcon from '../../lib/layout/input-error-icon'
import { ExpandMore, ExpandLess, ErrorOutline } from '../icon/icons/line'
import InputIconContainer from '../../lib/layout/input-icon-container'
// @ts-ignore
import InputNumberStyles from './input-number.module.scss'

export interface Props {
  iconColor?: string
  autoComplete?: string
  autofocus?: boolean
  className?: string
  defaultValue?: string | number
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
  layout?: 'horizontal' | 'vertical'
  name?: string
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void
  onFocus?(x: React.FocusEvent<HTMLInputElement>): void
  onBlur?(x: React.FocusEvent<HTMLInputElement>): void
  onKeyDown?(x: React.KeyboardEvent<HTMLInputElement>): void
  placeholder?: string
  style?: React.CSSProperties
  value?: any
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  min?: number
  max?: number
  borderless?: boolean
}

function InputNumber({
  iconColor = '#ffffff',
  autoComplete,
  autofocus,
  className,
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
  value,
  style,
  size = 'medium',
  min,
  max,
  borderless = false,
}: Props) {
  const inputClasses = [InputNumberStyles['sbui-inputnumber']]

  const iconUpClasses = [
    InputNumberStyles['sbui-inputnumber-button'],
    InputNumberStyles['sbui-inputnumber-button-up'],
  ]

  const inputRefCurrent = inputRef
    ? inputRef
    : React.createRef<HTMLInputElement>()

  const iconDownClasses = [
    InputNumberStyles['sbui-inputnumber-button'],
    InputNumberStyles['sbui-inputnumber-button-down'],
  ]

  const iconNavClasses = [InputNumberStyles['sbui-inputnumber-nav']]

  if (error) inputClasses.push(InputNumberStyles['sbui-inputnumber--error'])

  if (icon) inputClasses.push(InputNumberStyles['sbui-inputnumber--with-icon'])

  if (size) {
    inputClasses.push(InputNumberStyles[`sbui-inputnumber--${size}`])
    iconNavClasses.push(InputNumberStyles[`sbui-inputnumber-nav--${size}`])
  }

  if (borderless)
    inputClasses.push(InputNumberStyles['sbui-inputnumber--borderless'])

  const onClickChevronUp = () => {
    inputRefCurrent.current?.stepUp()
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

  const onClickChevronDown = () => {
    inputRefCurrent.current?.stepDown()
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
    <div className={className}>
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
        <div className={InputNumberStyles['sbui-inputnumber-container']}>
          <input
            autoComplete={autoComplete}
            autoFocus={autofocus}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            name={name}
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
          <div className={iconNavClasses.join(' ')}>
            <ExpandMore
              size={24}
              color={iconColor}
              stroke={iconColor}
              className={iconUpClasses.join(' ')}
              onClick={onClickChevronUp}
              onMouseDown={(e: React.MouseEvent) => {
                e.preventDefault()
              }}
            />
            <ExpandLess
              className={iconDownClasses.join(' ')}
              onClick={onClickChevronDown}
              onMouseDown={(e: React.MouseEvent) => {
                e.preventDefault()
              }}
            />
          </div>
          {icon && <InputIconContainer icon={icon} />}
          {error ? (
            <div
              className={
                InputNumberStyles['sbui-inputnumber-actions-container']
              }
            >
              {error && <ErrorOutline size={24} color={'#ff0000'} />}
            </div>
          ) : null}
        </div>
      </FormLayout>
    </div>
  )
}

export default InputNumber
