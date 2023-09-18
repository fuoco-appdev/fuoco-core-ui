/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useRef, useState } from 'react'
import { Listbox as HeadlessListbox } from '@headlessui/react'
import { FormLayout, FormLayoutClasses } from '../../lib/layout/form-layout'
// @ts-ignore
import SelectStyles from './select-styled.module.scss'
import InputErrorIcon from '../../lib/layout/input-error-icon'
import Ripples from 'react-ripples'
import { Dropdown } from '../dropdown'
import { DropdownAlignment } from '../dropdown/dropdown'

const ListboxContext = React.createContext<{
  selectedId?: string
  onSelectedId?: (id: string) => void
}>({})

export interface ListboxProps {
  options: OptionProps[]
  selectedId: string
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
  touchScreen?: boolean
  descriptionText?: string
  error?: string
  icon?: any
  label?: string
  labelOptional?: string
  onChange?: (index: number, id: string, value: string | undefined) => void
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
  selectedId,
  options,
  classNames,
  touchScreen = false,
  descriptionText,
  error,
  icon,
  label,
  labelOptional,
  onChange,
  style,
  borderless = false,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}: ListboxProps) {
  const [selectedOption, setSelectedOption] = useState<OptionProps | undefined>(
    undefined
  )
  const anchorRef = useRef<HTMLDivElement | null>(null)

  const onSelectedId = (id: string | undefined) => {
    const props = options.find((option) => option.id === id)
    if (props) {
      const index = options.indexOf(props)
      if (onChange) onChange?.(index, props?.id, props?.value)
    }
  }

  useEffect(() => {
    if (options.length > 0) {
      const selectedOption = options.find((value) => value.id === selectedId)
      setSelectedOption(selectedOption)
    }
  }, [selectedId])

  let selectClasses = [SelectStyles['listbox'], classNames?.listbox]
  if (error)
    selectClasses.push(SelectStyles['listbox-error'], classNames?.error)
  if (borderless)
    selectClasses.push(
      SelectStyles['listbox-borderless'],
      classNames?.borderless
    )

  const anchorRect = anchorRef?.current?.getBoundingClientRect()
  return (
    <FormLayout
      label={label}
      labelOptional={labelOptional}
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
        <HeadlessListbox value={selectedOption?.value} onChange={() => {}}>
          {({ open }) => {
            return (
              <ListboxContext.Provider
                value={{
                  selectedId: selectedId,
                  onSelectedId: onSelectedId,
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
                      {selectedOption?.addOnBefore && (
                        <span
                          className={[
                            SelectStyles['listbox-addonbefore'],
                            classNames?.addonbefore,
                          ].join(' ')}
                        >
                          {selectedOption.addOnBefore(selectedOption?.value)}
                        </span>
                      )}
                      <span
                        className={[
                          SelectStyles['listbox-label'],
                          classNames?.label,
                        ].join(' ')}
                      >
                        {selectedOption?.value}
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
                </div>
                <Dropdown
                  style={{
                    ...(anchorRect && { width: anchorRect.width }),
                  }}
                  touchScreen={touchScreen}
                  onOpen={() => {
                    onFocus?.()
                    // for (const key in childRefs) {
                    //   childRefs[key]?.current?.updateSelectedValue(
                    //     selectedOption?.value
                    //   )
                    // }
                  }}
                  onClose={() => {
                    onBlur?.()
                  }}
                  align={DropdownAlignment.Left}
                  open={open}
                  anchorRef={anchorRef}
                >
                  {options.map((option) => {
                    return <ListboxOption {...option} />
                  })}
                </Dropdown>
              </ListboxContext.Provider>
            )
          }}
        </HeadlessListbox>
      </div>
    </FormLayout>
  )
}

export interface OptionProps {
  id: string
  value?: string
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
          onClick={() => selectedProps?.onSelectedId?.(id)}
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
                  selected: id === selectedProps?.selectedId,
                })}
              <span>
                {typeof children === 'function'
                  ? children?.({ selected: selectedProps?.selectedId })
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
