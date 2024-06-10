import { Button } from '../button'
import { Divider } from '../divider'
import { ExpandMore, Login } from '../icon/icons/line'
import { Dropdown, DropdownAlignment } from '.'
import { useEffect, useRef, useState } from 'react'

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
}

export const Default = (args: any) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div style={{ position: 'relative' }}>
      <Button
        ref={buttonRef}
        iconRight={<ExpandMore size={24} />}
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
        <Dropdown.Item
          onClick={() => {
            setIsOpen(false)
            console.log('clicked')
          }}
        >
          <span style={{ color: 'rgb(75, 85, 99)' }}>Account</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setIsOpen(false)
            console.log('clicked')
          }}
        >
          <span style={{ color: 'rgb(75, 85, 99)' }}>Settings</span>
        </Dropdown.Item>
        <Divider light />
        <Dropdown.Item
          onClick={() => {
            setIsOpen(false)
            console.log('clicked')
          }}
        >
          <Dropdown.Icon>
            <Login size={24} />
          </Dropdown.Icon>
          <span style={{ color: 'rgb(75, 85, 99)' }}>Log out</span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export const DefaultLeft = (args: any) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div style={{ position: 'relative' }}>
      <Button
        ref={buttonRef}
        iconRight={<ExpandMore size={24} />}
        onClick={(e) => setIsOpen(true)}
      >
        Click for dropdown
      </Button>
      <Dropdown
        anchorRef={buttonRef}
        align={DropdownAlignment.Left}
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <Dropdown.Item
          onClick={() => {
            setIsOpen(false)
            console.log('clicked')
          }}
        >
          <span style={{ color: 'rgb(75, 85, 99)' }}>Account</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setIsOpen(false)
            console.log('clicked')
          }}
        >
          <span style={{ color: 'rgb(75, 85, 99)' }}>Settings</span>
        </Dropdown.Item>
        <Divider light />
        <Dropdown.Item
          onClick={() => {
            setIsOpen(false)
            console.log('clicked')
          }}
        >
          <Dropdown.Icon>
            <Login size={24} />
          </Dropdown.Icon>
          <span style={{ color: 'rgb(75, 85, 99)' }}>Log out</span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export const DefaultCenter = (args: any) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div style={{ position: 'relative' }}>
      <Button
        ref={buttonRef}
        iconRight={<ExpandMore size={24} />}
        onClick={(e) => setIsOpen(true)}
      >
        Click for dropdown
      </Button>
      <Dropdown
        anchorRef={buttonRef}
        align={DropdownAlignment.Center}
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <Dropdown.Item
          onClick={() => {
            setIsOpen(false)
            console.log('clicked')
          }}
        >
          <span style={{ color: 'rgb(75, 85, 99)' }}>Account</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setIsOpen(false)
            console.log('clicked')
          }}
        >
          <span style={{ color: 'rgb(75, 85, 99)' }}>Settings</span>
        </Dropdown.Item>
        <Divider light />
        <Dropdown.Item
          onClick={() => {
            setIsOpen(false)
            console.log('clicked')
          }}
        >
          <Dropdown.Icon>
            <Login size={24} />
          </Dropdown.Icon>
          <span style={{ color: 'rgb(75, 85, 99)' }}>Log out</span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export const Bottom = (args: any) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative' }}>
        <Button
          ref={buttonRef}
          as="span"
          type="outline"
          iconRight={<ExpandMore size={24} />}
          onClick={(e) => setIsOpen(true)}
          style={{
            height: 'fit-content',
            alignSelf: 'bottom',
            width: 'fit-content',
          }}
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
              <Login size={24} />
            </Dropdown.Icon>
            <span style={{ color: 'rgb(75, 85, 99)' }}>Log out</span>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  )
}

export const TouchScreenTitle = (args: any) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div style={{ position: 'relative' }}>
      <Button
        ref={buttonRef}
        as="span"
        type="outline"
        iconRight={<ExpandMore size={24} />}
        onClick={(e) => setIsOpen(true)}
      >
        Click for dropdown
      </Button>
      <Dropdown
        touchScreen={true}
        title="Account"
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        {[1, 1].map(() => (
          <Dropdown.Item
            onClick={() => {
              //setIsOpen(false)
              console.log('clicked')
            }}
          >
            <span style={{ color: 'rgb(75, 85, 99)' }}>Account</span>
          </Dropdown.Item>
        ))}
        <Dropdown.Item
          onClick={() => {
            //setIsOpen(false)
            console.log('clicked')
          }}
        >
          <span style={{ color: 'rgb(75, 85, 99)' }}>Settings</span>
        </Dropdown.Item>
        <Divider light />
        <Dropdown.Item
          onClick={() => {
            setIsOpen(false)
            console.log('clicked')
          }}
        >
          <Dropdown.Icon>
            <Login size={24} />
          </Dropdown.Icon>
          <span style={{ color: 'rgb(75, 85, 99)' }}>Log out</span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export const TouchScreenScroll = (args: any) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div style={{ position: 'relative' }}>
      <Button
        ref={buttonRef}
        as="span"
        type="outline"
        iconRight={<ExpandMore size={24} />}
        onClick={(e) => setIsOpen(true)}
      >
        Click for dropdown
      </Button>
      <Dropdown
        touchScreen={true}
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        {[
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1,
        ].map(() => (
          <Dropdown.Item
            onClick={() => {
              //setIsOpen(false)
              console.log('clicked')
            }}
          >
            <span style={{ color: 'rgb(75, 85, 99)' }}>Account</span>
          </Dropdown.Item>
        ))}
        <Dropdown.Item
          onClick={() => {
            //setIsOpen(false)
            console.log('clicked')
          }}
        >
          <span style={{ color: 'rgb(75, 85, 99)' }}>Settings</span>
        </Dropdown.Item>
        <Divider light />
        <Dropdown.Item
          onClick={() => {
            setIsOpen(false)
            console.log('clicked')
          }}
        >
          <Dropdown.Icon>
            <Login size={24} />
          </Dropdown.Icon>
          <span style={{ color: 'rgb(75, 85, 99)' }}>Log out</span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}
