import React from 'react'
import { FormLayout, FormLayoutClasses } from '../../lib/layout/form-layout'
import { CheckboxContext } from './checkbox-context'
// @ts-ignore
import CheckboxStyles from './checkbox.module.scss'
import Ripples, { RipplesProps } from 'react-ripples'

export interface CheckboxGroupClasses {
  formLayout: FormLayoutClasses
}

export interface CheckboxClasses {
  container?: string
  rippleButton?: string
  checkbox?: string
  labelContainer?: string
  labelContainerLabel?: string
  labelContainerLabelSpan?: string
  beforeLabel?: string
  afterLabel?: string
  descriptionLabel?: string
}

export interface CheckboxProps {
  label: string | JSX.Element
  afterLabel?: string
  beforeLabel?: string
  value?: string
  description?: string
  disabled?: boolean
  id?: string
  name?: string
  checked?: boolean
  classNames?: CheckboxClasses
  rippleProps?: RipplesProps
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void
  onFocus?(x: React.FocusEvent<HTMLInputElement>): void
  onBlur?(x: React.FocusEvent<HTMLInputElement>): void
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

export interface CheckboxGroupProps {
  id?: any
  error?: any
  descriptionText?: any
  label?: any
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: any
  name?: any
  value?: any
  classNames?: CheckboxGroupClasses
  children?: React.ReactNode
  options: Array<CheckboxProps>
  defaultValue?: string
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

function Group({
  id,
  error,
  descriptionText,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  children,
  classNames,
  name,
  options,
  onChange,
  size = 'medium',
}: CheckboxGroupProps) {
  const parentCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e)
  }

  return (
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
      <CheckboxContext.Provider
        value={{ parentCallback, name, parentSize: size }}
      >
        {options
          ? options.map((option: CheckboxProps) => {
              return (
                <Checkbox
                  id={option.id}
                  value={option.value}
                  label={option.label}
                  beforeLabel={option.beforeLabel}
                  afterLabel={option.afterLabel}
                  checked={option.checked}
                  name={option.name}
                  description={option.description}
                />
              )
            })
          : children}
      </CheckboxContext.Provider>
    </FormLayout>
  )
}

export function Checkbox({
  classNames,
  id,
  label,
  afterLabel,
  beforeLabel,
  description,
  name,
  checked,
  value,
  rippleProps = {
    color: 'rgba(36, 128, 180, .3)',
    during: 250,
  },
  onChange,
  onFocus,
  onBlur,
  size = 'medium',
  disabled = false,
  ...props
}: CheckboxProps) {
  const inputName = name

  return (
    <CheckboxContext.Consumer>
      {({ parentCallback, name, parentSize }) => {
        let markupId = id
        if (id && label === typeof String) {
          markupId = label
            .toLowerCase()
            .replace(/^[^A-Z0-9]+/gi, '')
            .replace(/ /g, '-')
        }

        // if name does not exist on Radio then use Context Name from Radio.Group
        // if that fails, use the id
        const markupName = inputName ? inputName : name ? name : markupId

        // check if checkbox checked is true or false
        // if neither true or false the checkbox will rely on native control
        const active = checked ?? undefined

        let containerClasses = [
          CheckboxStyles['checkbox-container'],
          classNames?.container,
          CheckboxStyles[
            `checkbox-container-${parentSize ? parentSize : size}`
          ],
        ]

        const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          // '`onChange` callback for parent component
          if (parentCallback) parentCallback(e)
          // '`onChange` callback for this component
          if (onChange) onChange(e)
        }

        return (
          <div className={containerClasses.join(' ')}>
            <Ripples
              {...rippleProps}
              className={[
                CheckboxStyles['ripple-button'],
                classNames?.rippleButton,
              ].join(' ')}
            >
              <input
                id={markupId}
                name={markupName}
                type="checkbox"
                className={[
                  CheckboxStyles['checkbox'],
                  classNames?.checkbox,
                ].join(' ')}
                onChange={onInputChange}
                onFocus={onFocus ? (event) => onFocus(event) : undefined}
                onBlur={onBlur ? (event) => onBlur(event) : undefined}
                checked={active}
                value={value ? value : markupId}
                disabled={disabled}
                {...props}
              />
            </Ripples>
            <div
              className={[
                CheckboxStyles['checkbox-label-container'],
                classNames?.labelContainer,
              ].join(' ')}
            >
              <label
                className={[
                  CheckboxStyles['checkbox-label-container-label'],
                  classNames?.labelContainerLabel,
                ].join(' ')}
                htmlFor={markupId}
              >
                <span
                  className={[
                    CheckboxStyles['checkbox-label-container-label-span'],
                    classNames?.labelContainerLabelSpan,
                  ].join(' ')}
                >
                  {beforeLabel && (
                    <span
                      className={[
                        CheckboxStyles['checkbox-before-label'],
                        classNames?.beforeLabel,
                      ].join(' ')}
                    >
                      {beforeLabel}
                    </span>
                  )}
                  {label}
                  {afterLabel && (
                    <span
                      className={[
                        CheckboxStyles['checkbox-after-label'],
                        classNames?.afterLabel,
                      ].join(' ')}
                    >
                      {afterLabel}
                    </span>
                  )}
                </span>

                {description && (
                  <p
                    className={[
                      CheckboxStyles['checkbox-description-label'],
                      classNames?.descriptionLabel,
                    ].join(' ')}
                  >
                    {description}
                  </p>
                )}
              </label>
            </div>
          </div>
        )
      }}
    </CheckboxContext.Consumer>
  )
}

Checkbox.Group = Group
export default Checkbox
