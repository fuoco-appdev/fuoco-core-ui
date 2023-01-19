import React, { useRef, useState } from 'react'

import Listbox, { OptionProps } from './listbox'
import { IconGlobe } from '../icon/icons/icon-globe'

export default {
  title: 'Data Input/Listbox',
  component: Listbox,
}

const defaultOptions = [
  { value: 'one', label: 'one' },
  { value: 'two', label: 'two' },
  { value: 'three', label: 'three' },
  { value: 'four', label: 'four' },
]

export const Default = (args: any) => {
  const options: OptionProps[] = []
  for (const option of defaultOptions) {
    options.push({
      id: option.label,
      value: option.value,
      children: () => (
        <span style={{ fontSize: '0.875rem' }}>{option.label}</span>
      ),
    })
  }
  return (
    <div style={{ height: '80vh' }}>
      <Listbox
        label="Default listbox"
        defaultIndex={0}
        options={options}
        onChange={(index: number, id: string, value: string) =>
          console.log(value)
        }
      />
    </div>
  )
}

const people = [
  {
    value: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    value: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 'Hellen Schmidt',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 'Caroline Schultz',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 'Mason Heaney',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 'Claudie Smitham',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 'Emil Schaefer',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export const People = (args: any) => {
  const ref = useRef<any>(null)
  const options: OptionProps[] = []
  for (const person of people) {
    options.push({
      value: person.value,
      addOnBefore: () => (
        <img
          src={person.avatar}
          alt=""
          style={{
            height: '1.5rem',
            width: '1.5rem',
            borderRadius: '99999px',
            marginRight: '8px',
          }}
        />
      ),
      children: () => {
        // console.log('selected', selected)
        // console.log('active', active)
        return (
          <span
            className={'font-normal block truncate'}
            style={{ fontSize: '0.875rem' }}
          >
            {person.value}
          </span>
        )
      },
    })
  }

  return (
    <Listbox
      label="Choose a person"
      layout="horizontal"
      descriptionText="Choose a person for this role"
      defaultIndex={0}
      options={options}
      onChange={(index: number, id: string, value: string) =>
        console.log(value)
      }
    />
  )
}

People.args = {
  disabled: false,
  label: 'Label',
  layout: 'vertical',
  size: 'medium',
}

export const WithIcon = (args: any) => {
  const ref = useRef<any>(null)
  const [isGlobeIconLit, setIsGlobeIconLit] = useState<boolean>(false)
  return (
    <Listbox
      label="Language"
      layout="vertical"
      icon={<IconGlobe stroke={isGlobeIconLit ? '#4AFFFF' : '#d1d5db'} />}
      onChange={(index: number, id: string, value: string) =>
        console.log(value)
      }
      onMouseEnter={() => setIsGlobeIconLit(true)}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        if (document.activeElement !== e.currentTarget) {
          setIsGlobeIconLit(false)
        }
      }}
      onFocus={() => setIsGlobeIconLit(true)}
      onBlur={() => setIsGlobeIconLit(false)}
      options={[
        {
          value: 'English',
          children: ({ selected }: any) => {
            return (
              <span
                className={'font-normal block truncate'}
                style={{ fontSize: '0.875rem' }}
              >
                English
              </span>
            )
          },
        },
        {
          value: 'French',
          children: ({ selected }: any) => {
            return (
              <span
                className={'font-normal block truncate'}
                style={{ fontSize: '0.875rem' }}
              >
                French
              </span>
            )
          },
        },
      ]}
    />
  )
}

WithIcon.args = {
  disabled: false,
  layout: 'vertical',
  size: 'medium',
}

export const ErrorState = (args: any) => {
  const options: OptionProps[] = []
  for (const person of people) {
    options.push({
      value: person.value,
      addOnBefore: ({ selected }: any) => (
        <img
          src={person.avatar}
          alt=""
          style={{
            height: '1.5rem',
            width: '1.5rem',
            borderRadius: '99999px',
            marginRight: '8px',
          }}
        />
      ),
      children: () => {
        return (
          <span
            className={'font-normal block truncate'}
            style={{ fontSize: '0.875rem' }}
          >
            {person.value}
          </span>
        )
      },
    })
  }
  return (
    <Listbox
      label="Choose a person"
      descriptionText="Choose a person for this role"
      error="I am an error"
      options={options}
      onChange={(index: number, id: string, value: string) =>
        console.log(value)
      }
    />
  )
}

export const TouchScreen = (args: any) => {
  const options: OptionProps[] = []
  for (const option of defaultOptions) {
    options.push({
      id: option.label,
      value: option.value,
      children: () => (
        <span style={{ fontSize: '0.875rem' }}>{option.label}</span>
      ),
    })
  }
  return (
    <div style={{ height: '80vh' }}>
      <Listbox
        label="Default listbox"
        touchScreen={true}
        defaultIndex={0}
        options={options}
        onChange={(index: number, id: string, value: string) =>
          console.log(value)
        }
      />
    </div>
  )
}

ErrorState.args = {
  label: 'Choose a person',
  descriptionText: 'Choose a person for this role',
}
