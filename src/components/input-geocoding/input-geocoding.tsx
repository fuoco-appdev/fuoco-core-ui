import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FormLayout } from '../../lib/layout/form-layout'
// @ts-ignore
import InputGeocodingStyles from './input-geocoding.module.scss'
import { Dropdown } from '../dropdown/index'
import InputErrorIcon from '../../lib/layout/input-error-icon'
import { animated, useSpring } from 'react-spring'
import { DropdownAlignment } from '../dropdown/dropdown'
import InputIconContainer from '../../lib/layout/input-icon-container'
import { ErrorOutline, Search } from '../icon/icons/line'

export interface InputGeocodingProps {
  mapboxAccessToken: string
  id?: string
  iconColor?: string
  touchScreen?: boolean
  className?: string
  strings?: {
    searchNotFound: string
    searchPlaceholder: string
  }
  icon?: JSX.Element
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  formStyle?: React.CSSProperties
  error?: string
  label?: string
  layout?: 'horizontal' | 'vertical'
  descriptionText?: string
  defaultCoordinates?: [number, number]
  placeType?:
    | 'address'
    | 'postcode'
    | 'place'
    | 'district'
    | 'region'
    | 'country'
  disabled?: boolean
  disableDropdown?: boolean
  placeholder?: string
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
  containerStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
  shakeInterpolationCount?: number
  shakeDistance?: number
  classes?: {
    dropdown?: string
  }
  onLocationChanged?: (value: string, data: any) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLInputElement>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onEnterKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  isValid?: boolean
}

function InputGeocoding({
  id,
  touchScreen = false,
  iconColor = '#ffffff',
  mapboxAccessToken,
  icon,
  className,
  strings = {
    searchNotFound: 'No entries to show',
    searchPlaceholder: 'Search',
  },
  error,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  formStyle,
  layout,
  descriptionText,
  defaultCoordinates,
  placeType = 'address',
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
  onMouseEnter,
  onMouseLeave,
  onClick,
  onKeyDown,
  onEnterKeyPress,
  isValid,
}: InputGeocodingProps) {
  const dropdownRefs: Record<string, HTMLLIElement> = {}
  const inputRef = useRef<HTMLInputElement | null>(null)
  const dropdownRef = useRef<HTMLUListElement | null>(null)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
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

  useEffect(() => {
    if (selectedFeature && value === selectedFeature['place_name']) {
      return
    }

    const timeout = setTimeout(async () => {
      try {
        const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${mapboxAccessToken}&autocomplete=true&types=${placeType}`
        const response = await fetch(endpoint)
        const results = await response.json()
        setFeatures(results?.features)
      } catch (error) {
        console.error('Error fetching data, ', error)
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [value])

  useLayoutEffect(() => {
    const updateLocationAsync = new Promise<void>(async (resolve, reject) => {
      let selectedLongitude = 0
      let selectedLatitude = 0
      let defaultLongitude = 0
      let defaultLatitude = 0
      if (selectedFeature) {
        selectedLongitude = selectedFeature['center'][0] ?? 0
        selectedLatitude = selectedFeature['center'][1] ?? 0
      }

      if (defaultCoordinates) {
        defaultLongitude = defaultCoordinates[0] ?? 0
        defaultLatitude = defaultCoordinates[1] ?? 0
      }

      if (
        selectedLongitude === defaultLongitude &&
        selectedLatitude === defaultLatitude
      ) {
        resolve()
      }

      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${defaultLongitude},${defaultLatitude}.json?access_token=${mapboxAccessToken}&types=${placeType}`
      const response = await fetch(endpoint)
      const results = await response.json()
      if (results.features?.length > 0) {
        const feature = results.features[0]
        setSelectedFeature(feature)
        setValue(feature['place_name'])
        resolve()
      }
    })

    updateLocationAsync.then()
  }, [defaultCoordinates])

  const interpolation: number[] = []
  interpolation.push(0)

  for (let i = 0; i < shakeInterpolationCount; i++) {
    interpolation.push(-shakeDistance)
    interpolation.push(shakeDistance)
  }

  interpolation.push(0)

  const classesContainer: string[] = [InputGeocodingStyles['container']]
  if (error) classesContainer.push(InputGeocodingStyles['error'])

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
        id={id}
        error={error}
        descriptionText={descriptionText}
        style={formStyle}
        size={'medium'}
      >
        <div
          ref={inputRef}
          className={classesContainer.join(' ')}
          style={containerStyle}
        >
          {icon && (
            <div className={InputGeocodingStyles['input-geocoding-icon']}>
              {icon}
            </div>
          )}
          <input
            {...inputProps}
            className={InputGeocodingStyles['inputgeocoding']}
            style={inputStyle}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (touchScreen) {
                return
              }

              handleChange(event)
            }}
            onInput={() => setShowDropdown(true)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onClick={() => {
              if (touchScreen) {
                setShowDropdown(true)
              }
            }}
          />
          <div className={InputGeocodingStyles['actions-container']}></div>
          {error ? (
            <div className={InputGeocodingStyles['actions-container']}>
              {error && (
                <ErrorOutline size={24} color={'#ff0000'} strokeWidth={0} />
              )}
            </div>
          ) : null}
        </div>
      </FormLayout>
      <Dropdown
        className={classes?.dropdown}
        touchScreen={touchScreen}
        anchorRef={inputRef}
        align={DropdownAlignment.Left}
        open={showDropdown}
        onClose={() => {
          setShowDropdown(false)
        }}
      >
        {touchScreen && (
          <div className={InputGeocodingStyles['search-root']}>
            <div
              key={'flag-search'}
              className={InputGeocodingStyles['search-container']}
            >
              <div className={InputGeocodingStyles['search-icon']}>
                <Search
                  size={24}
                  strokeWidth={0}
                  color={iconColor}
                  stroke={iconColor}
                  className={InputGeocodingStyles['search--with-icon']}
                />
              </div>
              <input
                autoFocus={true}
                disabled={disabled}
                id={id}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (!touchScreen) {
                    return
                  }

                  handleChange(event)
                }}
                placeholder={strings?.searchPlaceholder}
                value={value}
                className={[InputGeocodingStyles['search']].join(' ')}
              />
            </div>
          </div>
        )}
        {features?.length > 0 &&
          features?.map((feature, index) => {
            return (
              <Dropdown.Item
                onClick={(e) => handleFeatureItemClick(feature, e)}
                ref={(el: HTMLLIElement) =>
                  (dropdownRefs[`feature_${index}`] = el)
                }
                key={`feature_${index}`}
              >
                <span className={InputGeocodingStyles['place-name']}>
                  {feature['place_name']}
                </span>
              </Dropdown.Item>
            )
          })}
      </Dropdown>
    </animated.div>
  )
}

export default InputGeocoding
