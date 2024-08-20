import React, { useEffect, useState } from 'react'
import { FormLayout, FormLayoutClasses } from '../../lib/layout/form-layout'
// @ts-ignore
import RadioStyles from './radio.module.scss'
import { RadioContext } from './radio-context'
import Ripples, { RipplesProps } from 'react-ripples'

export interface RadioClasses {
  container?: string
  labelContainer?: string
  label?: string
  containerCard?: string
  containerCardActive?: string
  radio?: string
  labelText?: string
  labelTextBefore?: string
  labelTextAfter?: string
  labelDescription?: string
  rightContentContainer?: string
}

export interface RadioGroupClasses {
  fieldset?: string
  fieldsetCards?: string
  formLayout?: FormLayoutClasses
  groupContents?: string
  radio: RadioClasses
}

export interface RadioProps {
  label: string
  classNames?: RadioClasses
  afterLabel?: string
  beforeLabel?: string
  value: string
  description?: string
  rightContent?: () => JSX.Element
  rippleProps?: RipplesProps
  disabled?: boolean
  id?: string
  name?: string
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void
  onFocus?(x: React.FocusEvent<HTMLInputElement>): void
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

export interface RadioGroupProps {
  activeId?: string
  allowedValues?: string[]
  checkboxes?: any
  id: string
  classNames?: RadioGroupClasses
  error?: any
  descriptionText?: any
  label?: any
  rippleProps?: RipplesProps
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: any
  name?: any
  type?: any
  transform?: any
  children?: React.ReactNode
  options?: Array<RadioProps>
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

function RadioGroup({
  id,
  activeId = '',
  rippleProps = {
    during: 350,
    color: 'rgba(0,0,0,0.35)',
  },
  error,
  descriptionText,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  children,
  classNames,
  type,
  options,
  name,
  onChange,
  size = 'medium',
}: RadioGroupProps) {
  const parentCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
  }

  let classes = [RadioStyles['radio-fieldset']]

  if (type === 'cards') {
    classes.push(RadioStyles['radio-fieldset-cards'])
  }

  return (
    <RadioContext.Provider
      value={{ parentCallback, type, name, activeId, parentSize: size }}
    >
      <fieldset className={classes.join(' ')}>
        <FormLayout
          label={label}
          afterLabel={afterLabel}
          beforeLabel={beforeLabel}
          labelOptional={labelOptional}
          id={id}
          error={error}
          descriptionText={descriptionText}
          classNames={classNames?.formLayout}
          size={size}
        >
          <div
            className={[
              RadioStyles['radio-group-contents'],
              classNames?.groupContents,
            ].join(' ')}
          >
            <div>
              {options
                ? options.map((option: RadioProps) => {
                    return (
                      <Radio
                        {...option}
                        classNames={classNames?.radio}
                        rippleProps={rippleProps}
                      />
                    )
                  })
                : children}
            </div>
          </div>
        </FormLayout>
      </fieldset>
    </RadioContext.Provider>
  )
}

function Radio({
  id,
  classNames,
  disabled,
  value,
  rippleProps,
  label,
  afterLabel,
  beforeLabel,
  description,
  rightContent,
  onChange,
  onFocus,
  size = 'medium',
}: RadioProps) {
  return (
    <RadioContext.Consumer>
      {({ parentCallback, type, name, activeId, parentSize }) => {
        let classes = [
          RadioStyles['radio-container'],
          classNames?.container,
          RadioStyles['radio-label'],
          classNames?.label,
          RadioStyles[`radio-container-${parentSize ? parentSize : size}`],
        ]
        if (type === 'cards') {
          classes.push(
            RadioStyles['radio-container-card'],
            classNames?.containerCard,
          )
        }
        if (type === 'cards' && activeId === id) {
          classes.push(
            RadioStyles['radio-container-card-active'],
            classNames?.containerCardActive,
          )
        }

        const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          parentCallback?.(e)
          onChange?.(e)
        }

        return (
          <Ripples
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...rippleProps}
            className={classes.join(' ')}
          >
            <label
              id={id}
              className={RadioStyles['radio-label-container-card']}
            >
              <input
                id={id}
                name={name}
                type="radio"
                className={[RadioStyles['radio'], classNames?.radio].join(' ')}
                checked={activeId === id}
                disabled={disabled}
                value={value ? value : activeId}
                onChange={onInputChange}
                onFocus={onFocus ? (event) => onFocus(event) : undefined}
              />
              <div
                className={[
                  RadioStyles['radio-label-container'],
                  classNames?.labelContainer,
                ].join(' ')}
              >
                <span
                  className={[
                    RadioStyles['radio-label-text'],
                    classNames?.labelText,
                  ].join(' ')}
                >
                  {beforeLabel && (
                    <span
                      className={[
                        RadioStyles['radio-label-text-before'],
                        classNames?.labelTextBefore,
                      ].join(' ')}
                    >
                      {beforeLabel}
                    </span>
                  )}
                  {label}
                  {afterLabel && (
                    <span
                      className={[
                        RadioStyles['radio-label-text-after'],
                        classNames?.labelTextAfter,
                      ].join(' ')}
                    >
                      {afterLabel}
                    </span>
                  )}
                </span>

                {description && (
                  <span
                    className={[
                      RadioStyles['radio-label-description'],
                      classNames?.labelDescription,
                    ].join(' ')}
                  >
                    {description}
                  </span>
                )}
              </div>
              <div
                className={[
                  RadioStyles['radio-right-content-container'],
                  classNames?.rightContentContainer,
                ].join(' ')}
              >
                {rightContent?.()}
              </div>
            </label>
          </Ripples>
        )
      }}
    </RadioContext.Consumer>
  )
}

Radio.Group = RadioGroup

export default Radio
