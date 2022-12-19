/* This example requires Tailwind CSS v2.0+ */
import React, { useRef, useState } from 'react'
import { Listbox as HeadlessListbox } from '@headlessui/react'
import { FormLayout, FormLayoutClasses } from '../../lib/layout/form-layout'
// @ts-ignore
import SelectStyles from './select-styled.module.scss'
import InputErrorIcon from '../../lib/layout/input-error-icon'
import Ripples from 'react-ripples'
import { Dropdown } from '../dropdown'
import { DropdownAlignment } from '../dropdown/dropdown'

const ListboxContext = React.createContext<{
  selectedItem?: string
  setSelectedItem?: (value: string) => void
}>({})

export interface ListboxProps {
  options: OptionProps[]
  defaultIndex?: number
  classNames?: {
    formLayout?: FormLayoutClasses
    listbox?: string
    error?: string
    borderless?: string
    container?: string
    ripple?: string
    iconContainer?: string
    addonbefore?: string
    label?: string
    actionsContainer?: string
    chevronContainer?: string
    chevron?: string
  }
  descriptionText?: string
  error?: string
  icon?: any
  id?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  onChange?: (index: number, id: string, value: string) => void
  style?: React.CSSProperties
  reveal?: boolean
  actions?: React.ReactNode
  borderless?: boolean
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
  onFocus?: () => void
  onBlur?: () => void
}

function Listbox({
  defaultIndex = 0,
  options,
  classNames,
  descriptionText,
  error,
  icon,
  id,
  label,
  labelOptional,
  layout,
  onChange,
  style,
  borderless = false,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}: ListboxProps) {
  const [childRefs] = useState<Record<string, React.MutableRefObject<any>>>({})
  const [selectedProps, setSelectedProps] = useState<OptionProps | undefined>(
    options[defaultIndex]
  )
  const anchorRef = useRef<HTMLDivElement | null>(null)

  function handleOnChange(e: any) {}

  const setSelectedItem = (value: string) => {
    const props = options.find((option) => option.value === value)
    if (props) {
      const index = options.indexOf(props)
      setSelectedProps(props)

      if (onChange) onChange?.(index, props?.id ?? value, value)
    }
  }

  let selectClasses = [SelectStyles['listbox'], classNames?.listbox]
  if (error)
    selectClasses.concat([SelectStyles['listbox-error'], classNames?.error])
  if (borderless)
    selectClasses.concat([
      SelectStyles['listbox-borderless'],
      classNames?.borderless,
    ])

  return (
    <FormLayout
      label={label}
      labelOptional={labelOptional}
      layout={layout}
      id={id}
      error={error}
      descriptionText={descriptionText}
      classNames={classNames?.formLayout}
      style={style}
      size={'medium'}
    >
      <div
        className={[
          SelectStyles['listbox-container'],
          classNames?.container,
        ].join(' ')}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <HeadlessListbox value={selectedProps?.value} onChange={handleOnChange}>
          {({ open }) => {
            return (
              <ListboxContext.Provider
                value={{
                  selectedItem: selectedProps?.value,
                  setSelectedItem: setSelectedItem,
                }}
              >
                <div ref={anchorRef}>
                  <Ripples
                    className={[
                      SelectStyles['listbox-ripple'],
                      classNames?.ripple,
                    ].join(' ')}
                  >
                    <HeadlessListbox.Button className={selectClasses.join(' ')}>
                      {icon && (
                        <div
                          className={[
                            SelectStyles['listbox-icon-container'],
                            classNames?.iconContainer,
                          ].join(' ')}
                        >
                          {icon}
                        </div>
                      )}
                      {selectedProps?.addOnBefore && (
                        <span
                          className={[
                            SelectStyles['listbox-addonbefore'],
                            classNames?.addonbefore,
                          ].join(' ')}
                        >
                          {selectedProps.addOnBefore(selectedProps?.value)}
                        </span>
                      )}
                      <span
                        className={[
                          SelectStyles['listbox-label'],
                          classNames?.label,
                        ].join(' ')}
                      >
                        {selectedProps?.value}
                      </span>
                      {error && (
                        <div
                          className={[
                            SelectStyles['listbox-actions-container'],
                            classNames?.actionsContainer,
                          ].join(' ')}
                        >
                          {error && <InputErrorIcon />}
                        </div>
                      )}
                      <span
                        className={[
                          SelectStyles['listbox-chevron-container'],
                          classNames?.chevronContainer,
                        ].join(' ')}
                      >
                        <svg
                          className={[
                            SelectStyles['listbox-chevron'],
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
                    </HeadlessListbox.Button>
                  </Ripples>
                  <Dropdown
                    style={{
                      width: anchorRef?.current?.getClientRects()[0].width,
                    }}
                    onOpen={() => {
                      onFocus?.()
                      for (const key in childRefs) {
                        childRefs[key]?.current?.updateSelectedValue(
                          selectedProps?.value
                        )
                      }
                    }}
                    onClose={() => {
                      onBlur?.()
                    }}
                    align={DropdownAlignment.Right}
                    open={open}
                    anchorRef={anchorRef}
                  >
                    {options.map((option) => {
                      return <ListboxOption {...option} />
                    })}
                  </Dropdown>
                </div>
              </ListboxContext.Provider>
            )
          }}
        </HeadlessListbox>
      </div>
    </FormLayout>
  )
}

export interface OptionProps {
  value: string
  id?: string
  classNames?: {
    option?: string
    optionInner?: string
  }
  children?: ({ selected }: any) => React.ReactNode | React.ReactNode | any
  addOnBefore?: ({ selected }: any) => React.ReactNode
  disabled?: boolean
}

export function ListboxOption({
  id,
  classNames,
  addOnBefore,
  children,
  value,
}: OptionProps) {
  return (
    <ListboxContext.Consumer>
      {(selectedProps) => (
        <Dropdown.Item
          key={id}
          onClick={() => selectedProps?.setSelectedItem?.(value)}
        >
          <div
            className={[
              SelectStyles['listbox-option'],
              classNames?.option,
            ].join(' ')}
          >
            <div
              className={[
                SelectStyles['listbox-option-inner'],
                classNames?.optionInner,
              ].join(' ')}
            >
              {addOnBefore &&
                addOnBefore?.({
                  selected: value === selectedProps?.selectedItem,
                })}
              <span>
                {typeof children === 'function'
                  ? children?.({ selected: selectedProps?.selectedItem })
                  : children}
              </span>
            </div>
          </div>
        </Dropdown.Item>
      )}
    </ListboxContext.Consumer>
  )
}

export default Listbox
