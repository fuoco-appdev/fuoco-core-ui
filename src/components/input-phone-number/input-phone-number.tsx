import React, { useEffect, useRef, useState } from 'react'
import { FormLayout, FormLayoutClasses } from '../../lib/layout/form-layout'
// @ts-ignore
import InputPhoneNumberStyles from './input-phone-number.module.scss'
import memoize from 'lodash.memoize'
import { reduce, startsWith } from 'lodash'
import { Button } from '../button'
import { CountryDataProps, CountryData } from './country-data'
import { Dropdown } from '../dropdown/index'
import { Divider } from '../divider'
import { ErrorOutline, Search } from '../icon/icons/line'
import { animated, useSpring } from 'react-spring'
import { DropdownAlignment } from '../dropdown/dropdown'
import ReactCountryFlag from 'react-country-flag'

export interface InputPhoneNumberClasses {
  countryName?: string
  dialCode?: string
  searchRoot?: string
  searchContainer?: string
  searchIcon?: string
  searchWithIcon?: string
  search?: string
  dropdownList?: string
  container?: string
  button?: string
  inputPhoneNumber?: string
  actionsContainer?: string
  formLayout?: FormLayoutClasses
  dropdown?: string
  inputContainer?: string
}

export interface InputPhoneNumberProps {
  id?: string
  iconColor?: string
  parentRef: React.MutableRefObject<HTMLElement | null>
  classNames?: InputPhoneNumberClasses
  touchScreen?: boolean
  error?: string
  label?: string
  afterLabel?: string
  beforeLabel?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  descriptionText?: string
  prefix?: string
  disableCountryCode?: boolean
  countryCodeEditable?: boolean
  disableCountryGuess?: boolean
  enableLongNumbers?: boolean
  country?: string
  onlyCountries?: string[]
  excludeCountries?: string[]
  enableAreaCodes?: string[]
  enableTerritories?: boolean
  regions?: string[]
  preferredCountries?: string[]
  preserveOrder?: string[]
  masks?: string[]
  priority?: number
  areaCodes?: string[]
  localization?: Record<string, string>
  defaultMask?: string
  alwaysDefaultMask?: boolean
  disableInitialCountryGuess?: boolean
  defaultValue?: string
  enableAreaCodeStretch?: boolean
  autoFormat?: boolean
  disabled?: boolean
  disableDropdown?: boolean
  jumpCursorToEnd?: boolean
  defaultPlaceholder?: string
  searchNotFound?: string
  searchPlaceholder?: string
  autocompleteSearch?: boolean
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
  formStyle?: React.CSSProperties
  containerStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
  shakeInterpolationCount?: number
  shakeDistance?: number
  onChange?: (
    value: string,
    data: CountryDataProps | {},
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>,
    formattedValue: string
  ) => void
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement>,
    data: CountryDataProps | {}
  ) => void
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement>,
    data: CountryDataProps | {}
  ) => void
  onClick?: (
    event: React.MouseEvent<HTMLInputElement>,
    data: CountryDataProps | {}
  ) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onEnterKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  isValid?:
    | ((
        value: string,
        country: object,
        countries: object[],
        hiddenAreaCodes: object[]
      ) => boolean | string)
    | boolean
  onMount?: (
    value: string,
    data: CountryDataProps | {},
    formattedValue: string
  ) => void
}

function InputPhoneNumber({
  id,
  iconColor = '#000',
  parentRef,
  classNames,
  touchScreen = false,
  error,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  layout,
  descriptionText,
  prefix = '+',
  disableCountryCode = false,
  countryCodeEditable = true,
  enableLongNumbers,
  country = '',
  enableAreaCodes = [],
  enableTerritories = false,
  regions = [],
  onlyCountries = [],
  excludeCountries = [],
  preferredCountries = [],
  preserveOrder = [],
  masks = [],
  priority,
  areaCodes,
  localization = {},
  defaultMask = '... ... ... ... ..',
  alwaysDefaultMask = false,
  defaultValue = '',
  disableInitialCountryGuess = false,
  disableCountryGuess = false,
  enableAreaCodeStretch = false,
  autoFormat = true,
  disabled = false,
  disableDropdown = false,
  jumpCursorToEnd = true,
  defaultPlaceholder = '1 (702) 123-4567',
  searchNotFound = 'No entries to show',
  searchPlaceholder = 'Search',
  autocompleteSearch = false,
  inputProps,
  formStyle,
  containerStyle,
  inputStyle,
  shakeInterpolationCount = 3,
  shakeDistance = 6,
  onChange,
  onFocus,
  onBlur,
  onClick,
  onKeyDown,
  onEnterKeyPress,
  isValid,
  onMount,
}: InputPhoneNumberProps) {
  const dropdownRefs: Record<string, HTMLLIElement> = {}
  const numberInputRef = useRef<HTMLInputElement | null>(null)
  const inputRef = useRef<HTMLDivElement | null>(null)
  const dropdownRef = useRef<HTMLUListElement | null>(null)
  const countryData = new CountryData(
    enableAreaCodes,
    enableTerritories,
    regions,
    onlyCountries,
    preferredCountries,
    excludeCountries,
    preserveOrder,
    areaCodes,
    localization,
    prefix,
    defaultMask,
    alwaysDefaultMask,
    masks,
    priority
  )
  const guessSelectedCountry = memoize(
    (
      inputNumber: string,
      country: string | number,
      onlyCountries: CountryDataProps[],
      hiddenAreaCodes: CountryDataProps[]
    ): CountryDataProps | undefined => {
      // if enableAreaCodes == false, try to search in hidden area codes to detect area code correctly
      // then search and insert main country which has this area code
      // https://github.com/bl00mber/react-phone-input-2/issues/201
      if (enableAreaCodes.length <= 0) {
        let mainCode: CountryDataProps | undefined
        hiddenAreaCodes.some((country: CountryDataProps) => {
          if (startsWith(inputNumber, country.dialCode)) {
            onlyCountries.some((o) => {
              if (country.iso2 === o.iso2 && o.mainCode) {
                mainCode = o
                return true
              }
            })
            return true
          }
        })
        if (mainCode) return mainCode
      }

      const secondBestGuess = onlyCountries.find((o) => o.iso2 === country)
      if (inputNumber.trim() === '') return secondBestGuess

      const bestGuess: CountryDataProps | undefined = onlyCountries.reduce(
        (selected, country) => {
          if (startsWith(inputNumber, country.dialCode)) {
            if (country.dialCode.length > selected.dialCode.length) {
              return country
            }
            if (
              country.dialCode.length === selected.dialCode.length &&
              country.priority < selected.priority
            ) {
              return country
            }
          }
          return selected
        },
        {
          ...(selectedCountry ?? {
            name: '',
            localName: '',
            countryCode: '',
            regions: [],
            format: '',
            iso2: '',
            dialCode: '',
            mainCode: false,
            hasAreaCodes: false,
            isAreaCode: false,
            priority: 0,
            areaCodeLength: 0,
          }),
          dialCode: '',
          priority: 10001,
        }
      )

      if (!bestGuess?.name) return secondBestGuess
      return bestGuess
    }
  )

  const [onlyCountriesData, setOnlyCountriesData] = useState<
    CountryDataProps[]
  >(countryData.onlyCountries)
  const [hiddenAreaCodesData, setHiddenAreaCodesData] = useState<
    CountryDataProps[]
  >(countryData.hiddenAreaCodes)
  const [countryGuess, setCountryGuess] = useState<CountryDataProps | null>(
    null
  )

  const formatNumber = (
    text: string,
    country: CountryDataProps | null
  ): string => {
    if (!country) return text

    const { format } = country

    let pattern: string[] | string | null = null
    if (disableCountryCode) {
      pattern = format.split(' ')
      pattern.shift()
      pattern = pattern.join(' ')
    } else {
      if (enableAreaCodeStretch && country.isAreaCode) {
        pattern = format.split(' ')
        pattern[1] = pattern[1].replace(
          /\.+/,
          ''.padEnd(country.areaCodeLength, '.')
        )
        pattern = pattern.join(' ')
      } else {
        pattern = format
      }
    }

    if (!text || text.length === 0) {
      return disableCountryCode ? '' : prefix ?? ''
    }

    // for all strings with length less than 3, just return it (1, 2 etc.)
    // also return the same text if the selected country has no fixed format
    if ((text && text.length < 2) || !pattern || !autoFormat) {
      return disableCountryCode ? text : prefix + text
    }

    const formattedObject = reduce(
      pattern,
      (acc, character) => {
        if (acc.remainingText.length === 0) {
          return acc
        }

        if (character !== '.') {
          return {
            formattedText: acc.formattedText + character,
            remainingText: acc.remainingText,
          }
        }

        const [head, ...tail] = acc.remainingText

        return {
          formattedText: acc.formattedText + head,
          remainingText: tail,
        }
      },
      {
        formattedText: '',
        remainingText: text.split(''),
      }
    )

    let formattedNumber: string = ''
    if (enableLongNumbers) {
      formattedNumber =
        formattedObject.formattedText + formattedObject.remainingText.join('')
    } else {
      formattedNumber = formattedObject.formattedText
    }

    // Always close brackets
    if (formattedNumber.includes('(') && !formattedNumber.includes(')'))
      formattedNumber += ')'
    return formattedNumber
  }

  const [formattedNumber, setFormattedNumber] = useState<string>('')
  const [highlightCountryIndex, setHighlightCountryIndex] = useState<number>(
    countryData.onlyCountries.findIndex((o) => o === countryGuess)
  )
  const [preferredCountriesData, setPreferredCountriesData] = useState<
    CountryDataProps[]
  >(countryData.preferredCountries)
  const [selectedCountry, setSelectedCountry] =
    useState<CountryDataProps | null>(null)
  const [queryString, setQueryString] = useState<string>('')
  const [freezeSelection, setFreezeSelection] = useState<boolean>(false)
  const [debouncedQueryStingSearcher, setDebouncedQueryStingSearcher] =
    useState<any | null>(null)
  const [searchValue, setSearchValue] = useState<string>('')
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [placeholder, setPlaceholder] = useState<string>('')

  const getCountryData = (): CountryData | {} => {
    if (!selectedCountry) return {}
    return {
      name: selectedCountry.name || '',
      dialCode: selectedCountry.dialCode || '',
      countryCode: selectedCountry.iso2 || '',
      format: selectedCountry.format || '',
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    let newFormattedNumber = disableCountryCode ? '' : prefix ?? ''
    let newSelectedCountry: CountryDataProps | null = selectedCountry

    if (!countryCodeEditable) {
      const mainCode: string | undefined = newSelectedCountry?.hasAreaCodes
        ? onlyCountriesData.find(
            (o: CountryDataProps) =>
              o.iso2 === newSelectedCountry?.iso2 && o.mainCode
          )?.dialCode
        : newSelectedCountry?.dialCode

      const updatedInput = (prefix ?? '') + (mainCode ?? '')
      if (value.slice(0, updatedInput.length) !== updatedInput) return
    }

    if (value === prefix) {
      // we should handle change when we delete the last digit
      onChange?.('', getCountryData(), e, '')
      setFormattedNumber('')
      return
    }

    // Does exceed default 15 digit phone number limit
    if (value.replace(/\D/g, '').length > 15) {
      if (enableLongNumbers === false) return
      if (typeof enableLongNumbers === 'number') {
        if (value.replace(/\D/g, '').length > enableLongNumbers) return
      }
    }

    // if the input is the same as before, must be some special key like enter etc.
    if (value === formattedNumber) return

    // ie hack
    if (e.preventDefault) {
      e.preventDefault()
    } else {
      return false
    }

    if (onChange) e.persist()

    if (value.length > 0) {
      // before entering the number in new format, lets check if the dial code now matches some other country
      const inputNumber = value.replace(/\D/g, '')
      // we don't need to send the whole number to guess the country... only the first 6 characters are enough
      // the guess country function can then use memoization much more effectively since the set of input it
      // gets has drastically reduced
      if (
        !freezeSelection ||
        (!!selectedCountry &&
          selectedCountry.dialCode.length > inputNumber.length)
      ) {
        if (disableCountryGuess) {
          newSelectedCountry = selectedCountry
        } else {
          newSelectedCountry =
            guessSelectedCountry(
              inputNumber.substring(0, 6),
              country ?? '',
              onlyCountriesData,
              hiddenAreaCodesData
            ) || selectedCountry
        }

        if (freezeSelection) {
          setFreezeSelection(false)
        }
      }

      newFormattedNumber = formatNumber(inputNumber, newSelectedCountry!)
      newSelectedCountry = newSelectedCountry?.dialCode
        ? newSelectedCountry
        : selectedCountry
    }

    const oldFormattedText = formattedNumber
    let oldCaretPosition = e.target.selectionStart ?? 0
    let caretPosition = e.target.selectionStart ?? 0
    let formattedNumberDifference =
      (newFormattedNumber?.length ?? 0) - (oldFormattedText.length ?? 0)

    setFormattedNumber(newFormattedNumber)
    setSelectedCountry(newSelectedCountry)

    if (formattedNumberDifference > 0) {
      caretPosition = caretPosition - formattedNumberDifference
    }

    const lastChar = newFormattedNumber.charAt(newFormattedNumber.length - 1)
    if (lastChar === ')') {
      numberInputRef?.current?.blur()
      numberInputRef?.current?.setSelectionRange(
        newFormattedNumber.length - 1,
        newFormattedNumber.length - 1
      )
      numberInputRef?.current?.focus()
    } else if (
      caretPosition > 0 &&
      oldFormattedText.length >= newFormattedNumber.length
    ) {
      numberInputRef?.current?.blur()
      numberInputRef?.current?.setSelectionRange(caretPosition, caretPosition)
      numberInputRef?.current?.focus()
    } else if (oldCaretPosition < oldFormattedText.length) {
      numberInputRef?.current?.blur()
      numberInputRef?.current?.setSelectionRange(
        oldCaretPosition,
        oldCaretPosition
      )
      numberInputRef?.current?.focus()
    }

    onChange?.(
      newFormattedNumber.replace(/[^0-9]+/g, ''),
      getCountryData(),
      e,
      newFormattedNumber
    )
  }

  const updateFormattedNumber = (value: string | null) => {
    if (value === null) {
      setSelectedCountry(null)
      setFormattedNumber('')
      return
    }

    if (value === '') {
      setSelectedCountry(selectedCountry)
      return
    }

    let inputNumber = value.replace(/\D/g, '')
    let newSelectedCountry, newFormattedNumber

    // if new value start with selectedCountry.dialCode, format number, otherwise find newSelectedCountry
    if (
      selectedCountry &&
      startsWith(value, prefix + selectedCountry.dialCode)
    ) {
      newFormattedNumber = formatNumber(inputNumber, selectedCountry)
      setFormattedNumber(newFormattedNumber)
    } else {
      if (disableCountryGuess) {
        newSelectedCountry = selectedCountry
      } else {
        newSelectedCountry =
          guessSelectedCountry(
            inputNumber.substring(0, 6),
            country,
            onlyCountriesData,
            hiddenAreaCodesData
          ) || selectedCountry
      }

      const dialCode =
        newSelectedCountry &&
        startsWith(inputNumber, prefix + newSelectedCountry.dialCode)
          ? newSelectedCountry.dialCode
          : ''
      newFormattedNumber = formatNumber(
        (disableCountryCode ? '' : dialCode) + inputNumber,
        newSelectedCountry
      )

      setSelectedCountry(newSelectedCountry)
      setFormattedNumber(newFormattedNumber)
    }
  }

  // Hooks for updated props
  const updateCountry = (country: string) => {
    let newSelectedCountry
    if (country.charAt(0) >= '0' && country.charAt(0) <= '9') {
      newSelectedCountry = onlyCountriesData.find(
        (o) => o.dialCode === `+${country}`
      )
    } else {
      newSelectedCountry = onlyCountriesData.find((o) => o.iso2 === country)
    }
    if (newSelectedCountry && newSelectedCountry.dialCode) {
      setSelectedCountry(newSelectedCountry)
      const newFormattedNumber = disableCountryCode
        ? ''
        : formatNumber(newSelectedCountry.dialCode, newSelectedCountry)
      setFormattedNumber(newFormattedNumber)
    }
  }

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // if the input is blank, insert dial code of the selected country
    if (numberInputRef) {
      if (
        numberInputRef.current?.value === prefix &&
        selectedCountry &&
        !disableCountryCode
      ) {
        const newFormattedNumber = prefix + selectedCountry.dialCode
        setFormattedNumber(newFormattedNumber)
        jumpCursorToEnd && setTimeout(cursorToEnd, 0)
      }
    }

    setPlaceholder('')

    onFocus?.(e, getCountryData())
    jumpCursorToEnd && setTimeout(cursorToEnd, 0)
  }

  // Put the cursor to the end of the input (usually after a focus event)
  const cursorToEnd = () => {
    const input = numberInputRef?.current
    if (document.activeElement !== input) return
    input?.focus()
    let length = input?.value.length ?? 0
    if (input?.value.charAt(length - 1) === ')') length = length - 1
    input?.setSelectionRange(length, length)
  }

  const getCountryDropdownList = () => {
    const searchedCountries = getSearchFilteredCountries()

    let countryDropdownList = searchedCountries.map((country, index) => {
      const inputFlagClasses = [InputPhoneNumberStyles[country?.iso2]].join(' ')
      return (
        <Dropdown.Item
          onClick={(e) => handleFlagItemClick(country, e)}
          ref={(el: HTMLLIElement) => (dropdownRefs[`flag_no_${index}`] = el)}
          key={`flag_no_${index}`}
        >
          <Dropdown.Icon>
            <ReactCountryFlag
              countryCode={country.iso2?.toUpperCase() ?? ''}
              svg={true}
              style={{ width: 18, height: 18 }}
            />
          </Dropdown.Icon>
          <span
            className={[
              InputPhoneNumberStyles['country-name'],
              classNames?.countryName,
            ].join(' ')}
          >
            {getDropdownCountryName(country)}
          </span>
          <span
            className={[
              InputPhoneNumberStyles['dial-code'],
              classNames?.dialCode,
            ].join(' ')}
          >
            {country.format
              ? formatNumber(country.dialCode, country)
              : prefix + country.dialCode}
          </span>
        </Dropdown.Item>
      )
    })

    const dashedLi = <Divider light />
    // let's insert a dashed line in between preffered countries and the rest
    preferredCountriesData.length > 0 &&
      !searchValue.trim() &&
      countryDropdownList.splice(preferredCountriesData.length, 0, dashedLi)

    return (
      <div>
        <div
          className={[
            InputPhoneNumberStyles['search-root'],
            classNames?.searchRoot,
          ].join(' ')}
        >
          <div
            key={'flag-search'}
            className={[
              InputPhoneNumberStyles['search-container'],
              classNames?.searchContainer,
            ].join(' ')}
          >
            <div
              className={[
                InputPhoneNumberStyles['search-icon'],
                classNames?.searchIcon,
              ].join(' ')}
            >
              <Search
                size={24}
                strokeWidth={0}
                color={iconColor}
                stroke={iconColor}
                className={[
                  InputPhoneNumberStyles['search-with-icon'],
                  classNames?.searchWithIcon,
                ].join(' ')}
              />
            </div>
            <input
              autoComplete={autocompleteSearch ? 'on' : 'off'}
              autoFocus={true}
              disabled={disabled}
              id={id}
              onChange={handleSearchChange}
              placeholder={searchPlaceholder}
              value={searchValue}
              className={[
                InputPhoneNumberStyles['search'],
                classNames?.search,
              ].join(' ')}
            />
          </div>
        </div>
        <div
          className={[
            InputPhoneNumberStyles['dropdown-list'],
            classNames?.dropdownList,
          ].join(' ')}
        >
          {countryDropdownList.length > 0 ? (
            countryDropdownList
          ) : (
            <Dropdown.Item>
              <span
                className={[
                  InputPhoneNumberStyles['country-name'],
                  classNames?.countryName,
                ].join(' ')}
              >
                {searchNotFound}
              </span>
            </Dropdown.Item>
          )}
        </div>
      </div>
    )
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value: searchValue },
    } = e
    let highlightIndex = 0
    if (searchValue === '' && selectedCountry) {
      highlightIndex = concatPreferredCountries(
        preferredCountriesData,
        onlyCountriesData
      ).findIndex((o) => o === selectedCountry)
      // wait asynchronous search results re-render, then scroll
      setTimeout(() => scrollTo(getElement(highlightCountryIndex)), 100)
    }

    setSearchValue(searchValue)
    setHighlightCountryIndex(highlightIndex)
  }

  const scrollTo = (country: HTMLElement | null, middle?: boolean) => {
    if (!country) return
    const container = dropdownRef.current
    if (!container || !document.body) return

    const containerHeight = container.offsetHeight
    const containerOffset = container.getBoundingClientRect()
    const containerTop = containerOffset.top + document.body.scrollTop
    const containerBottom = containerTop + containerHeight

    const element = country
    const elementOffset = element.getBoundingClientRect()

    const elementHeight = element?.offsetHeight
    const elementTop = elementOffset.top + document.body.scrollTop
    const elementBottom = elementTop + elementHeight

    let newScrollTop = elementTop - containerTop + container.scrollTop
    const middleOffset = containerHeight / 2 - elementHeight / 2

    if (elementTop < containerTop + 32) {
      // scroll up
      if (middle) {
        newScrollTop -= middleOffset
      }
      container.scrollTop = newScrollTop
    } else if (elementBottom > containerBottom) {
      // scroll down
      if (middle) {
        newScrollTop += middleOffset
      }
      const heightDifference = containerHeight - elementHeight
      container.scrollTop = newScrollTop - heightDifference
    }
  }

  const getElement = (index: number): HTMLElement | null => {
    return dropdownRefs[`flag_no_${index}`]
  }

  const getDropdownCountryName = (country: CountryDataProps) => {
    return country.localName || country.name
  }

  const handleFlagItemClick = (
    country: CountryDataProps,
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    const currentSelectedCountry = selectedCountry
    const newSelectedCountry = onlyCountriesData.find((o) => o === country)
    if (!newSelectedCountry) return

    const unformattedNumber: string = formattedNumber
      .replace(' ', '')
      .replace('(', '')
      .replace(')', '')
      .replace('-', '')
    const newNumber =
      unformattedNumber.length > 1
        ? unformattedNumber.replace(
            currentSelectedCountry?.dialCode ?? '',
            newSelectedCountry.dialCode
          )
        : newSelectedCountry.dialCode
    const newFormattedNumber = formatNumber(
      newNumber.replace(/\D/g, ''),
      newSelectedCountry
    )

    setShowDropdown(false)
    setSelectedCountry(newSelectedCountry)
    setFreezeSelection(true)
    setFormattedNumber(newFormattedNumber)
    setSearchValue('')

    cursorToEnd()
    onChange?.(
      formattedNumber.replace(/[^0-9]+/g, ''),
      getCountryData(),
      e,
      formattedNumber
    )

    numberInputRef.current?.focus()
  }

  const getSearchFilteredCountries = () => {
    const allCountries = concatPreferredCountries(
      preferredCountriesData,
      onlyCountriesData
    )
    const sanitizedSearchValue = searchValue
      .trim()
      .toLowerCase()
      .replace('+', '')
    if (sanitizedSearchValue) {
      // [...new Set()] to get rid of duplicates
      // firstly search by iso2 code
      if (/^\d+$/.test(sanitizedSearchValue)) {
        // contains digits only
        // values wrapped in ${} to prevent undefined
        return allCountries.filter(({ dialCode }) =>
          [`${dialCode}`].some((field) =>
            field.toLowerCase().includes(sanitizedSearchValue)
          )
        )
      } else {
        const iso2countries: CountryDataProps[] = allCountries.filter(
          ({ iso2 }) =>
            [`${iso2}`].some((field) =>
              field.toLowerCase().includes(sanitizedSearchValue)
            )
        )
        // || '' - is a fix to prevent search of 'undefined' strings
        // Since all the other values shouldn't be undefined, this fix was accepte
        // but the structure do not looks very good
        const searchedCountries = allCountries.filter(
          ({ name, localName, iso2 }) =>
            [`${name}`, `${localName || ''}`].some((field) =>
              field.toLowerCase().includes(sanitizedSearchValue)
            )
        )
        scrollToTop()
        return [
          ...new Set(
            ([] as CountryDataProps[]).concat(iso2countries, searchedCountries)
          ),
        ]
      }
    } else {
      return allCountries
    }
  }

  const scrollToTop = () => {
    const container = dropdownRef?.current
    if (!container || !document.body) return
    container.scrollTop = 0
  }

  const concatPreferredCountries = (
    preferredCountriesData: CountryDataProps[],
    onlyCountriesData: CountryDataProps[]
  ) => {
    if (preferredCountries.length > 0) {
      return [...new Set(preferredCountriesData.concat(onlyCountriesData))]
    } else {
      return onlyCountriesData
    }
  }

  useEffect(() => {
    updateCountry(country)
  }, [country])

  useEffect(() => {
    const inputNumber = defaultValue ? defaultValue.replace(/\D/g, '') : ''
    let guess: CountryDataProps | null = null
    if (disableInitialCountryGuess) {
      guess = null
    } else if (inputNumber.length > 1) {
      // Country detect by phone
      guess =
        guessSelectedCountry(
          inputNumber.substring(0, 6),
          country,
          countryData.onlyCountries,
          countryData.hiddenAreaCodes
        ) || null
    } else if (country) {
      // Default country
      guess = countryData.onlyCountries.find((o) => o.iso2 === country) || null
    }

    const dialCode =
      inputNumber.length < 2 &&
      guess &&
      !startsWith(inputNumber, guess.dialCode)
        ? guess.dialCode
        : ''
    const number = formatNumber(
      (disableCountryCode ? '' : dialCode) + inputNumber,
      guess
    )
    setCountryGuess(guess)
    setFormattedNumber(number)
  }, [defaultValue])

  useEffect(() => {
    setSelectedCountry(countryGuess)
  }, [countryGuess])

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
      className={[classNames?.container].join(' ')}
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
        style={formStyle}
        size={'medium'}
      >
        <div
          className={[
            InputPhoneNumberStyles['input-container'],
            classNames?.inputContainer,
            error ? InputPhoneNumberStyles['input-container-error'] : undefined,
          ].join(' ')}
          style={containerStyle}
          ref={inputRef}
        >
          <Button
            tabIndex={-1}
            className={[
              InputPhoneNumberStyles['button'],
              classNames?.button,
            ].join(' ')}
            rounded={true}
            htmlType={'button'}
            size={'tiny'}
            type={'text'}
            icon={
              <ReactCountryFlag
                countryCode={selectedCountry?.iso2?.toUpperCase() ?? 'ca'}
                svg={true}
                style={{ width: 18, height: 18 }}
              />
            }
            onClick={(e) => {
              setShowDropdown(true)
            }}
          />
          <Dropdown
            className={classNames?.dropdown}
            touchScreen={touchScreen}
            parentRef={parentRef}
            anchorRef={inputRef}
            align={DropdownAlignment.Left}
            ref={dropdownRef}
            open={showDropdown}
            onClose={() => {
              setShowDropdown(false)
            }}
          >
            {getCountryDropdownList()}
          </Dropdown>
          <input
            className={[
              InputPhoneNumberStyles['inputphonenumber'],
              classNames?.inputPhoneNumber,
            ].join(' ')}
            style={inputStyle}
            onChange={handleInput}
            onFocus={handleInputFocus}
            value={formattedNumber}
            placeholder={defaultPlaceholder}
            disabled={disabled}
            type="tel"
            {...inputProps}
            ref={numberInputRef}
          />
          {error ? (
            <div
              className={[
                InputPhoneNumberStyles['actions-container'],
                classNames?.actionsContainer,
              ].join(' ')}
            >
              {error && (
                <ErrorOutline size={24} color={'#ff0000'} strokeWidth={0} />
              )}
            </div>
          ) : null}
        </div>
      </FormLayout>
    </animated.div>
  )
}

export default InputPhoneNumber
