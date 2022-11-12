import React from 'react'

import { Toast } from '.'
import { Button } from '../Button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Overlays/Toast',
  component: Toast,
}

const Template = (args: any) => {
  return <Toast {...args} />
}

Template.args = { message: 'Lorem ipsum', duration: 60000 }

export const Default = Template.bind({ ...Template.args })

export const Success = Template.bind({ ...Template.args, type: 'success' })

export const Error = Template.bind({ ...Template.args, type: 'error' })

export const Loading = Template.bind({ ...Template.args, type: 'loading' })

export const withActions = Template.bind({
  ...Template.args,
  actions: [<Button>Undo</Button>, <Button>Dismiss</Button>],
})

export const UsingToasts = ({ message, duration, ...rest }: any) => (
  <div className="flex flex-col w-full justify-between">
    <Toast.Toaster message={message} />
    <Button
      onClick={() => {
        Toast.toast(message, {
          duration,
        })
      }}
    >
      Create default toast
    </Button>
    <Button
      onClick={() => {
        Toast.toast.success(message, { duration })
      }}
    >
      Create success toast
    </Button>
    <Button
      onClick={() => {
        Toast.toast.error(message, { duration })
      }}
    >
      Create error toast
    </Button>
    <Button
      onClick={() => {
        Toast.toast.promise(
          new Promise((res) => {
            setTimeout(() => {
              res(true)
            }, 3000)
          }),
          {
            loading: 'Loading',
            success: (data) => `Successfully saved`,
            error: (err) => `This just happened`,
          },
          {
            success: {
              duration: 5000,
            },
          }
        )
      }}
    >
      Create promise toast
    </Button>
    <Button
      onClick={() => {
        Toast.toast('Message', {
          description: 'Description',
          duration,
        })
      }}
    >
      Create toast with description
    </Button>
    <Button
      onClick={() => {
        Toast.toast('Message', {
          duration,
          actions: [<Button>Undo</Button>, <Button>Dismiss</Button>],
        })
      }}
    >
      Create toast with actions
    </Button>
  </div>
)

UsingToasts.args = {
  message: 'Lorem ipsum',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  duration: 60000,
}
