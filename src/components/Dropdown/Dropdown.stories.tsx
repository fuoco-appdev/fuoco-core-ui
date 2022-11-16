import { Button } from '../Button'
import { Divider } from '../Divider'
import { IconChevronDown } from './../../index'

import { Dropdown } from './'
import { IconLogIn } from '../Icon/icons/IconLogIn'
import { useEffect, useRef, useState } from 'react'

// @ts-ignore
import DropdownStyles from './Dropdown.module.css'

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
}

export const Default = (args: any) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div>
      <Button
        buttonRef={buttonRef}
        as="span"
        type="outline"
        iconRight={<IconChevronDown />}
        onClick={(e) => setIsOpen(true)}
      >
        Click for dropdown
      </Button>
      <Dropdown
        anchorRef={buttonRef}
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <Dropdown.Item onClick={() => console.log('clicked')}>
          <span style={{ color: 'rgb(75, 85, 99)' }}>Account</span>
        </Dropdown.Item>
        <Dropdown.Item>
          <span style={{ color: 'rgb(75, 85, 99)' }}>Settings</span>
        </Dropdown.Item>
        <Divider light />
        <Dropdown.Item>
          <Dropdown.Icon>
            <IconLogIn size="tiny" />
          </Dropdown.Icon>
          <span style={{ color: 'rgb(75, 85, 99)' }}>Log out</span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export const Bottom = (args: any) => {
  const parentRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div
      ref={parentRef}
      style={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
      }}
    >
      <div>
        <Button
          buttonRef={buttonRef}
          as="span"
          type="outline"
          iconRight={<IconChevronDown />}
          onClick={(e) => setIsOpen(true)}
          style={{
            height: 'fit-content',
            alignSelf: 'bottom',
            width: 'fit-content',
          }}
        >
          Click for dropdown
        </Button>
      </div>

      <Dropdown
        parentRef={parentRef}
        anchorRef={buttonRef}
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <Dropdown.Item onClick={() => console.log('clicked')}>
          <span style={{ color: 'rgb(75, 85, 99)' }}>Account</span>
        </Dropdown.Item>
        <Dropdown.Item>
          <span style={{ color: 'rgb(75, 85, 99)' }}>Settings</span>
        </Dropdown.Item>
        <Divider light />
        <Dropdown.Item>
          <Dropdown.Icon>
            <IconLogIn size="tiny" />
          </Dropdown.Icon>
          <span style={{ color: 'rgb(75, 85, 99)' }}>Log out</span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}
