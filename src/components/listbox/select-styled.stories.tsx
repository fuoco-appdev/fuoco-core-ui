import React, { useRef, useState } from 'react'

import Listbox, { OptionProps } from './listbox'
import { Language } from '../icon/icons/line'

export default {
  title: 'Data Input/Listbox',
  component: Listbox,
}

const defaultOptions = [
  { id: 'one', value: 'one', label: 'one' },
  { id: 'two', value: 'two', label: 'two' },
  { id: 'three', value: 'three', label: 'three' },
  { id: 'four', value: 'four', label: 'four' },
]

export function Default() {
  const [selectedId, setSelectedId] = useState<string>('one')
  const options: OptionProps[] = []
  for (const option of defaultOptions) {
    options.push({
      id: option.id,
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
        selectedId={selectedId}
        options={options}
        onChange={(index: number, id: string, value?: string) =>
          setSelectedId(id)
        }
      />
    </div>
  )
}

const people = [
  {
    id: 'wade-cooper',
    value: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'arlene-mccoy',
    value: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'devon-webb',
    value: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 'tom-cook',
    value: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'tanya-fox',
    value: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'hellen-schmidt',
    value: 'Hellen Schmidt',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'caroline-schultz',
    value: 'Caroline Schultz',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'mason-heaney',
    value: 'Mason Heaney',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'claudie-smitham',
    value: 'Claudie Smitham',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'emil-schaefer',
    value: 'Emil Schaefer',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export function People() {
  const [selectedId, setSelectedId] = useState<string>('emil-schaefer')
  const options: OptionProps[] = []
  for (const person of people) {
    options.push({
      id: person.id,
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
      descriptionText="Choose a person for this role"
      selectedId={selectedId}
      options={options}
      onChange={(index: number, id: string, value?: string) =>
        setSelectedId(id)
      }
    />
  )
}

export function WithIcon() {
  const [selectedId, setSelectedId] = useState<string>('en')
  const [isGlobeIconLit, setIsGlobeIconLit] = useState<boolean>(false)
  return (
    <Listbox
      selectedId={selectedId}
      label="Language"
      icon={
        <Language
          size={24}
          stroke={isGlobeIconLit ? '#4AFFFF' : '#d1d5db'}
          strokeWidth={0}
        />
      }
      onChange={(index: number, id: string, value?: string) =>
        setSelectedId(id)
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
          id: 'en',
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
          id: 'fr',
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

export function ErrorState() {
  const [selectedId, setSelectedId] = useState<string>('arlene-mccoy')
  const options: OptionProps[] = []
  for (const person of people) {
    options.push({
      id: person.id,
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
      selectedId={selectedId}
      label="Choose a person"
      descriptionText="Choose a person for this role"
      error="I am an error"
      options={options}
      onChange={(index: number, id: string, value?: string) =>
        setSelectedId(id)
      }
    />
  )
}

export function TouchScreen() {
  const [selectedId, setSelectedId] = useState<string>('one')
  const options: OptionProps[] = []
  for (const option of defaultOptions) {
    options.push({
      id: option.id,
      value: option.value,
      children: () => (
        <span style={{ fontSize: '0.875rem' }}>{option.label}</span>
      ),
    })
  }
  return (
    <div style={{ height: '80vh' }}>
      <Listbox
        label={'Choose a person'}
        touchScreen={true}
        selectedId={selectedId}
        options={options}
        onChange={(index: number, id: string, value?: string) =>
          setSelectedId(id)
        }
      />
    </div>
  )
}
