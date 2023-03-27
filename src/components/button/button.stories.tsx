import React, { useRef, useState } from 'react'

import { Button } from '../../index'
import { ChevronRight } from '../icon/icons/line'

export default {
  title: 'General/Button',
  component: Button,
}

export const Default = (args: any) => <Button {...args}>Button text</Button>
export const withStyles = (args: any) => <Button {...args}>Button text</Button>
export const withIcon = (args: any) => <Button {...args}>Button text</Button>
export const withIconRight = (args: any) => (
  <Button {...args}>Button text</Button>
)
export const withBlock = (args: any) => <Button {...args}>Button text</Button>
export const withOnlyIcon = (args: any) => <Button {...args} />
export const withOnlyLoading = (args: any) => <Button {...args} />
export const withLoadingCentered = (args: any) => (
  <Button {...args}>Loading icon is centered</Button>
)
export const withRef = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [msg, setMsg] = useState<string>('Click button to console.log Ref')

  function onClick() {
    const message = `container: button:`
    setMsg(message)
    console.log(message)
  }

  return (
    <>
      <Button ref={buttonRef} onClick={onClick}>
        Button with forwardRef
      </Button>

      <p style={{ color: '#666666' }}>{msg}</p>
    </>
  )
}
export const allButtons = (args: any) => (
  <>
    <div>
      <div>
        <Button {...args} size="tiny">
          Button text
        </Button>
        <Button {...args} size="tiny" type="secondary">
          Button text
        </Button>
        <Button {...args} size="tiny" type="default">
          Button text
        </Button>
        <Button {...args} size="tiny" type="link">
          Button text
        </Button>
        <Button {...args} size="tiny" type="text">
          Button text
        </Button>
        <Button {...args} size="tiny" type="dashed">
          Button text
        </Button>
        <Button {...args} size="tiny" type="outline">
          Button text
        </Button>
      </div>

      <div>
        <Button {...args} size="small">
          Button text
        </Button>
        <Button {...args} size="small" type="secondary">
          Button text
        </Button>
        <Button {...args} size="small" type="default">
          Button text
        </Button>
        <Button {...args} size="small" type="link">
          Button text
        </Button>
        <Button {...args} size="small" type="text">
          Button text
        </Button>
        <Button {...args} size="small" type="dashed">
          Button text
        </Button>
        <Button {...args} size="small" type="outline">
          Button text
        </Button>
      </div>
      <div>
        <Button {...args}>Button text</Button>
        <Button {...args} size="medium" type="secondary">
          Button text
        </Button>
        <Button {...args} size="medium" type="default">
          Button text
        </Button>
        <Button {...args} size="medium" type="link">
          Button text
        </Button>
        <Button {...args} size="medium" type="text">
          Button text
        </Button>
        <Button {...args} size="medium" type="dashed">
          Button text
        </Button>
        <Button {...args} size="medium" type="outline">
          Button text
        </Button>
      </div>
      <div>
        <Button {...args} size="large">
          Button text
        </Button>
        <Button {...args} size="large" type="secondary">
          Button text
        </Button>
        <Button {...args} size="large" type="default">
          Button text
        </Button>
        <Button {...args} size="large" type="link">
          Button text
        </Button>
        <Button {...args} size="large" type="text">
          Button text
        </Button>
        <Button {...args} size="large" type="dashed">
          Button text
        </Button>
        <Button {...args} size="large" type="outline">
          Button text
        </Button>
      </div>
      <div>
        <Button {...args} size="xlarge">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="secondary">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="default">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="link">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="text">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="dashed">
          Button text
        </Button>
        <Button {...args} size="xlarge" type="outline">
          Button text
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '56px',
        }}
      >
        <Button {...args} size="full" block={true} touchScreen={true}>
          Button text
        </Button>
        <Button
          {...args}
          size="full"
          type="secondary"
          block={true}
          touchScreen={true}
        >
          Button text
        </Button>
        <Button
          {...args}
          size="full"
          type="default"
          block={true}
          touchScreen={true}
        >
          Button text
        </Button>
        <Button
          {...args}
          size="full"
          type="link"
          block={true}
          touchScreen={true}
        >
          Button text
        </Button>
        <Button
          {...args}
          size="full"
          type="text"
          block={true}
          touchScreen={true}
        >
          Button text
        </Button>
        <Button
          {...args}
          size="full"
          type="dashed"
          block={true}
          touchScreen={true}
        >
          Button text
        </Button>
        <Button
          {...args}
          size="full"
          type="outline"
          block={true}
          touchScreen={true}
        >
          Button text
        </Button>
      </div>
    </div>
  </>
)

export const withCustomTag = (args: any) => (
  <Button {...args}>Button text</Button>
)

const icon = <ChevronRight />

withIcon.args = {
  type: 'primary',
  icon: icon,
}

withIconRight.args = {
  type: 'primary',
  iconRight: <ChevronRight />,
}

withStyles.args = {
  type: 'primary',
  style: { backgroundColor: 'red', color: 'yellow' },
}

withBlock.args = {
  type: 'primary',
  block: true,
}

withOnlyIcon.args = {
  icon: icon,
}

withOnlyLoading.args = {
  loading: true,
}

withLoadingCentered.args = {
  loading: true,
  loadingCentered: true,
}

allButtons.args = {
  loading: false,
  danger: false,
}

withCustomTag.args = {
  as: 'span',
}
