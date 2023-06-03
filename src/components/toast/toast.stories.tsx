import React, { useState } from 'react'

import { Toast } from '.'
import { Button } from '../button/index'
import { ToastProps } from './toast'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Overlays/Toast',
  component: Toast,
}

export const Default = (args: any) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  return (
    <div
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            setToasts([
              {
                key: `test-${Math.random()}`,
                message: 'Test',
                description: 'This is a test!',
              },
            ])
          }}
        >
          Add Toast
        </Button>
      </div>

      <Toast.ToastOverlay {...args} toasts={toasts} />
    </div>
  )
}

export const TransitionDown = (args: any) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  return (
    <div
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            setToasts([
              {
                key: `test-${Math.random()}`,
                message: 'Test',
                description: 'This is a test!',
                actionsPosition: 'inline',
              },
            ])
          }}
        >
          Add Toast
        </Button>
      </div>

      <Toast.ToastOverlay {...args} transition="down" toasts={toasts} />
    </div>
  )
}

export const Success = (args: any) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  return (
    <div
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            setToasts([
              {
                key: `test-${Math.random()}`,
                message: 'Test',
                description: 'This is a test!',
                type: 'success',
                closable: true,
              },
            ])
          }}
        >
          Add Toast
        </Button>
      </div>

      <Toast.ToastOverlay {...args} toasts={toasts} />
    </div>
  )
}

export const Error = (args: any) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  return (
    <div
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            setToasts([
              {
                key: `test-${Math.random()}`,
                message: 'Test',
                description: 'This is a test!',
                type: 'error',
                closable: true,
              },
            ])
          }}
        >
          Add Toast
        </Button>
      </div>

      <Toast.ToastOverlay {...args} toasts={toasts} />
    </div>
  )
}

export const Loading = (args: any) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  return (
    <div
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            setToasts([
              {
                key: `test-${Math.random()}`,
                message: 'Test',
                description: 'This is a test!',
                type: 'loading',
                closable: true,
                disableLife: true,
              },
            ])
          }}
        >
          Add Toast
        </Button>
      </div>

      <Toast.ToastOverlay {...args} toasts={toasts} />
    </div>
  )
}

export const TouchScreen = (args: any) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  return (
    <div
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            setToasts([
              {
                key: `test-${Math.random()}`,
                message: 'Test',
                description: 'This is a test!',
              },
            ])
          }}
        >
          Add Toast
        </Button>
      </div>

      <Toast.ToastOverlay
        {...args}
        toasts={toasts}
        align={'center'}
        transition={'down'}
        touchScreen={true}
      />
    </div>
  )
}
