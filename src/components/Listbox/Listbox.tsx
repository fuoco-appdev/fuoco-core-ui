/* This example requires Tailwind CSS v2.0+ */
import React, {
  Fragment,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  Children,
} from 'react'
import { Listbox as HeadlessListbox, Transition } from '@headlessui/react'
import { FormLayout } from '../../lib/Layout/FormLayout'
// @ts-ignore
import SelectStyles from './SelectStyled.module.css'

import InputIconContainer from '../../lib/Layout/InputIconContainer'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import { IconCheck } from '../Icon/icons/IconCheck'
import Ripples from 'react-ripples'
import { Dropdown } from '../Dropdown'
import { DropdownAlignment } from '../Dropdown/Dropdown'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export interface Props {
  options: OptionProps[]
  defaultIndex?: number
  className?: string
  descriptionText?: string
  error?: string
  icon?: any
  id?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  onChange?(value: string): void
  style?: React.CSSProperties
  reveal?: boolean
  actions?: React.ReactNode
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  borderless?: boolean
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
  onFocus?: () => void
  onBlur?: () => void
}

function Listbox(
  {
    defaultIndex = 0,
    options,
    className,
    descriptionText,
    error,
    icon,
    id,
    label,
    labelOptional,
    layout,
    onChange,
    style,
    size = 'medium',
    borderless = false,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
  }: Props,
  ref: React.ForwardedRef<any>
) {
  const [childRefs] = useState<Record<string, React.MutableRefObject<any>>>({})
  const [selectedProps, setSelectedProps] = useState<OptionProps | null>(
    options[defaultIndex]
  )
  const anchorRef = useRef<HTMLDivElement | null>(null)

  function handleOnChange(e: any) {}

  useImperativeHandle(ref, () => ({
    addRef(id: string, ref: React.MutableRefObject<any>) {
      childRefs[id] = ref
    },
    setSelected(props: OptionProps) {
      setSelectedProps(props)

      if (onChange) onChange(props?.value)

      for (const key in childRefs) {
        childRefs[key]?.current?.updateSelectedValue(props?.value)
      }
    },
  }))

  let selectClasses = [SelectStyles['sbui-listbox']]
  if (error) selectClasses.push(SelectStyles['sbui-listbox--error'])
  if (icon) selectClasses.push(SelectStyles['sbui-listbox--with-icon'])
  if (size) selectClasses.push(SelectStyles[`sbui-listbox--${size}`])
  if (borderless) selectClasses.push(SelectStyles['sbui-listbox--borderless'])

  return (
    <FormLayout
      label={label}
      labelOptional={labelOptional}
      layout={layout}
      id={id}
      error={error}
      descriptionText={descriptionText}
      className={className}
      style={style}
      size={size}
    >
      <div
        className={SelectStyles['sbui-listbox-container']}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <HeadlessListbox value={selectedProps?.value} onChange={handleOnChange}>
          {({ open }) => {
            return (
              <div ref={anchorRef}>
                <Ripples className={SelectStyles['sbui-listbox-ripple']}>
                  <HeadlessListbox.Button className={selectClasses.join(' ')}>
                    {icon && <InputIconContainer icon={icon} />}
                    <span className={SelectStyles['sbui-listbox-addonbefore']}>
                      {selectedProps?.addOnBefore &&
                        selectedProps.addOnBefore(selectedProps?.value)}
                      <span className={SelectStyles['sbui-listbox-label']}>
                        {selectedProps?.value}
                      </span>
                    </span>
                    {error && (
                      <div
                        className={
                          SelectStyles['sbui-listbox-actions-container']
                        }
                      >
                        {error && <InputErrorIcon size={size} />}
                      </div>
                    )}
                    <span
                      className={SelectStyles['sbui-listbox-chevron-container']}
                    >
                      <svg
                        className={SelectStyles['sbui-listbox-chevron']}
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
                    width: anchorRef.current?.getClientRects()[0].width,
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
                    console.log('blur')
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
            )
          }}
        </HeadlessListbox>
      </div>
    </FormLayout>
  )
}

export interface OptionProps {
  parentRef: React.MutableRefObject<any>
  value: string
  id?: string
  className?: string
  children?: ({ selected }: any) => React.ReactNode | React.ReactNode | any
  addOnBefore?: ({ selected }: any) => React.ReactNode
  disabled?: boolean
}

export const ListboxOption = React.forwardRef(
  (props: OptionProps, ref: React.ForwardedRef<any>) => {
    ref = React.createRef()

    const [selectedItem, setSelectedItem] = useState<string | undefined>()
    useImperativeHandle(ref, () => ({
      updateSelectedValue(value: string) {
        setSelectedItem(value)
      },
    }))

    useEffect(() => {
      props.parentRef?.current?.addRef(props.value, ref)
    }, [])

    return (
      <Dropdown.Item
        key={props.id}
        onClick={() => {
          props.parentRef?.current?.setSelected(props)
        }}
      >
        <div
          ref={ref}
          className={classNames(SelectStyles['sbui-listbox-option'])}
        >
          <div className={SelectStyles['sbui-listbox-option__inner']}>
            {props.addOnBefore &&
              props.addOnBefore?.({ selected: selectedItem === props.value })}
            <span>
              {typeof props.children === 'function'
                ? props.children?.({ selected: selectedItem })
                : props.children}
            </span>
          </div>
        </div>
      </Dropdown.Item>
    )
  }
)

export default React.forwardRef(Listbox)
