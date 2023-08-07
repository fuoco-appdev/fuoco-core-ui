import { useEffect, useRef, useState } from 'react'
import { Button } from '../button'
import { Dropdown, DropDownProps } from '../dropdown'
import Ripples from 'react-ripples'
import ReactCountryFlag from 'react-country-flag'
import { FormLayout, FormLayoutClasses } from '../../lib/layout/form-layout'
// @ts-ignore
import styles from './language-switch.module.scss'
import ISO6391, { LanguageCode } from 'iso-639-1'
import * as countriesList from 'countries-list'

export function getCountriesInfo(): { [isoCode: string]: string[] } {
  const countriesInfo: { [isoCode: string]: string[] } = {}

  const countryList = JSON.parse(JSON.stringify(countriesList))
  for (const countryCode in countryList.countries) {
    const countryInfo = countryList.countries[countryCode]
    for (const isoCode of countryInfo.languages) {
      if (!countriesInfo.hasOwnProperty(isoCode)) {
        countriesInfo[isoCode] = []
      }

      if (!countriesInfo[isoCode].includes(countryCode)) {
        countriesInfo[isoCode].push(countryCode)
      }
    }
  }
  return countriesInfo
}

export interface LanguageInfo {
  name: string
  nativeName: string
  countryCode: string
}

export interface SupportedLanguage {
  isoCode: LanguageCode
  countryCode?: string
}

export interface LanguageSwitchProps {
  type?: 'button' | 'listbox' | 'none'
  language?: LanguageCode
  open?: boolean
  supportedLanguages?: SupportedLanguage[]
  touchScreen?: boolean
  dropdownProps?: DropDownProps
  hideText?: boolean
  classNames?: {
    formLayout?: FormLayoutClasses
    listbox?: string
    container?: string
    ripple?: string
    iconContainer?: string
    label?: string
    chevronContainer?: string
    chevron?: string
  }
  id?: string
  label?: string
  labelOptional?: string
  descriptionText?: string
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
  style?: React.CSSProperties
  onOpen?: () => void
  onClose?: () => void
  onChange?: (code: LanguageCode, info: LanguageInfo) => void
}

export const countriesInfo = getCountriesInfo()

const defaultSupportedLanguages = Object.keys(countriesInfo).map((value) => ({
  isoCode: value as LanguageCode,
}))

function LanguageSwitch({
  type = 'button',
  language = 'en',
  open = false,
  supportedLanguages = defaultSupportedLanguages,
  touchScreen = false,
  hideText = false,
  classNames,
  id,
  label,
  labelOptional,
  descriptionText,
  onMouseEnter,
  onMouseLeave,
  style,
  dropdownProps,
  onOpen,
  onClose,
  onChange,
}: LanguageSwitchProps) {
  const dropdownRefs: Record<string, HTMLLIElement> = {}
  const anchorRef = useRef<HTMLDivElement | null>(null)
  const [languagesInfo, setLanguagesInfo] = useState<{
    [isoCode: string]: LanguageInfo
  }>({})

  useEffect(() => {
    const info: { [isoCode: string]: LanguageInfo } = {}

    supportedLanguages.forEach((supportedLanguage) => {
      // @ts-ignore
      const name = ISO6391.getName(supportedLanguage.isoCode)
      // @ts-ignore
      const nativeName = ISO6391.getNativeName(supportedLanguage.isoCode)

      const defaultCountryCode = countriesInfo[supportedLanguage.isoCode][0]
      info[supportedLanguage.isoCode] = {
        name,
        nativeName,
        countryCode: supportedLanguage.countryCode ?? defaultCountryCode,
      }
    })

    setLanguagesInfo(info)
  }, [supportedLanguages])

  useEffect(() => {
    if (languagesInfo[language]) {
      onChange?.(language, languagesInfo[language])
    }
  }, [language])

  return (
    <div style={{ position: 'relative' }}>
      {type === 'button' && (
        <Button
          ref={anchorRef}
          type={'text'}
          icon={
            <div className={styles['flag']}>
              <ReactCountryFlag
                countryCode={languagesInfo[language]?.countryCode ?? ''}
                style={{ width: 18, height: 18 }}
                svg
              />
            </div>
          }
          onClick={onOpen}
          touchScreen={touchScreen}
        >
          {!hideText && languagesInfo[language]?.nativeName}
        </Button>
      )}
      {type === 'listbox' && (
        <FormLayout
          label={label}
          labelOptional={labelOptional}
          id={id}
          descriptionText={descriptionText}
          classNames={classNames?.formLayout}
          style={style}
          size={'medium'}
        >
          <div
            ref={anchorRef}
            className={[
              styles['listbox-container'],
              classNames?.container,
            ].join(' ')}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Ripples
              className={[styles['listbox-ripple'], classNames?.ripple].join(
                ' '
              )}
              onClick={onOpen}
            >
              <div
                className={[styles['listbox'], classNames?.listbox].join(' ')}
              >
                <div
                  className={[
                    styles['listbox-icon-container'],
                    classNames?.iconContainer,
                  ].join(' ')}
                >
                  <ReactCountryFlag
                    countryCode={languagesInfo[language]?.countryCode ?? ''}
                    style={{ width: 24 }}
                    svg
                  />
                </div>
                <span
                  className={[styles['listbox-label'], classNames?.label].join(
                    ' '
                  )}
                >
                  {languagesInfo[language]?.nativeName}
                </span>
                <span
                  className={[
                    styles['listbox-chevron-container'],
                    classNames?.chevronContainer,
                  ].join(' ')}
                >
                  <svg
                    className={[
                      styles['listbox-chevron'],
                      classNames?.chevron,
                    ].join(' ')}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Ripples>
          </div>
        </FormLayout>
      )}
      <Dropdown
        {...dropdownProps}
        style={{
          ...(type === 'listbox' && {
            width: anchorRef?.current?.getBoundingClientRect().width,
          }),
        }}
        touchScreen={touchScreen}
        anchorRef={anchorRef}
        open={open}
        onClose={onClose}
      >
        {supportedLanguages.map((language, index) => {
          return (
            <Dropdown.Item
              onClick={() => {
                onChange?.(language.isoCode, languagesInfo[language.isoCode])
                onClose?.()
              }}
              ref={(el: HTMLLIElement) =>
                (dropdownRefs[`flag_no_${index}`] = el)
              }
              key={`flag_no_${index}`}
            >
              <Dropdown.Icon>
                <div className={styles['flag']}>
                  <ReactCountryFlag
                    countryCode={
                      languagesInfo[language.isoCode]?.countryCode ?? ''
                    }
                    style={{ width: 24 }}
                    svg
                  />
                </div>
              </Dropdown.Icon>
              <span className={styles['language-name']}>
                {languagesInfo[language.isoCode]?.nativeName}
              </span>
            </Dropdown.Item>
          )
        })}
      </Dropdown>
    </div>
  )
}

export default LanguageSwitch
