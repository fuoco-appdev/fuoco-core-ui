import React, { useEffect, useRef, useState } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
// @ts-ignore
import InputGeocodingStyles from './InputGeocoding.module.css'
import { Button } from '../Button'
import { Dropdown } from '../Dropdown/index'
import { Space } from '../Space'
import { IconMapPin } from '../Icon/icons/IconMapPin'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import { animated, useSpring } from 'react-spring'
import { DropdownAlignment } from '../Dropdown/Dropdown'
import InputIconContainer from '../../lib/Layout/InputIconContainer'

export interface Props {
  id?: string
  mapboxAccessToken: string
  parentRef: React.MutableRefObject<HTMLElement | null>
  className?: string
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  formStyle?: React.CSSProperties
  error?: string
  label?: string
  layout?: 'horizontal' | 'vertical'
  descriptionText?: string
  areaCodes?: string[]
  defaultValue?: string
  disabled?: boolean
  disableDropdown?: boolean
  placeholder?: string
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
  containerStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  shakeInterpolationCount?: number
  shakeDistance?: number
  classes?: {
    dropdown?: string
  }
  onLocationChanged?: (value: string, data: any) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onEnterKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  isValid?: boolean
}

function InputGeocoding({
  id,
  mapboxAccessToken,
  parentRef,
  className,
  error,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  formStyle,
  layout,
  descriptionText,
  classes,
  containerStyle,
  inputStyle,
  disabled,
  inputProps,
  placeholder = '4321 Main Street',
  shakeInterpolationCount = 3,
  shakeDistance = 6,
  onLocationChanged,
  onChange,
  onFocus,
  onBlur,
  onClick,
  onKeyDown,
  onEnterKeyPress,
  isValid,
  size = 'medium',
}: Props) {
  const dropdownRefs: Record<string, HTMLLIElement> = {}
  const inputRef = useRef<HTMLInputElement | null>(null)
  const dropdownRef = useRef<HTMLUListElement | null>(null)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [mapPinIconLit, setMapPinIconLit] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const [features, setFeatures] = useState<any[]>([])
  const [selectedFeature, setSelectedFeature] = useState<any | null>(null)

  const { x } = useSpring({
    from: { x: 0 },
    to: error ? { x: 1 } : { x: 0 },
    config: { mass: 1, tension: 500, friction: 100 },
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange?.(event)
  }

  const handleFeatureItemClick = (
    feature: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedFeature(feature)
    setValue(feature['place_name'])
    onLocationChanged?.(value, feature)
    setShowDropdown(false)
  }

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setMapPinIconLit(true)
    onFocus?.(e)
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setMapPinIconLit(false)
    onBlur?.(e)
  }

  const handleOnMouseEnter = (e: React.MouseEvent<HTMLInputElement>) => {
    setMapPinIconLit(true)
    inputProps?.onMouseEnter?.(e)
  }

  const handleOnMouseLeave = (e: React.MouseEvent<HTMLInputElement>) => {
    if (document.activeElement !== e.currentTarget) {
      setMapPinIconLit(false)
    }

    inputProps?.onMouseLeave?.(e)
  }

  useEffect(() => {
    if (selectedFeature && value === selectedFeature['place_name']) {
      return
    }

    const timeout = setTimeout(async () => {
      try {
        const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${mapboxAccessToken}&autocomplete=true`
        const response = await fetch(endpoint)
        const results = await response.json()
        setShowDropdown(true)
        setFeatures(results?.features)
      } catch (error) {
        console.error('Error fetching data, ', error)
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [value])

  const interpolation: number[] = []
  interpolation.push(0)

  for (let i = 0; i < shakeInterpolationCount; i++) {
    interpolation.push(-shakeDistance)
    interpolation.push(shakeDistance)
  }

  interpolation.push(0)

  const classesContainer: string[] = [
    InputGeocodingStyles['sbui-inputphonenumber-container'],
  ]
  if (error)
    classesContainer.push(InputGeocodingStyles['sbui-inputphonenumber--error'])

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
        style={formStyle}
        size={size}
      >
        <div
          ref={inputRef}
          className={classesContainer.join(' ')}
          style={containerStyle}
        >
          <InputIconContainer
            icon={
              <IconMapPin
                size={size}
                stroke={mapPinIconLit ? '#4AFFFF' : '#d1d5db'}
              />
            }
          />
          <input
            {...inputProps}
            className={InputGeocodingStyles['sbui-inputphonenumber']}
            style={inputStyle}
            onChange={handleChange}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
          />
          <Space
            className={
              InputGeocodingStyles['sbui-inputphonenumber-actions-container']
            }
            size={1}
          ></Space>
          {error ? (
            <Space
              className={
                InputGeocodingStyles['sbui-inputphonenumber-actions-container']
              }
              size={1}
            >
              {error && <InputErrorIcon size={size} />}
            </Space>
          ) : null}
        </div>
      </FormLayout>
      <Dropdown
        className={classes?.dropdown}
        parentRef={parentRef}
        anchorRef={inputRef}
        align={DropdownAlignment.Left}
        ref={dropdownRef}
        open={showDropdown}
        onClose={() => {
          setShowDropdown(false)
        }}
      >
        {features?.map((feature, index) => {
          return (
            <Dropdown.Item
              onClick={(e) => handleFeatureItemClick(feature, e)}
              ref={(el: HTMLLIElement) =>
                (dropdownRefs[`feature_${index}`] = el)
              }
              key={`feature_${index}`}
            >
              <span className="place-name">{feature['place_name']}</span>
            </Dropdown.Item>
          )
        })}
      </Dropdown>
    </animated.div>
  )
}

export default InputGeocoding
