import React from 'react'
import { Alert } from '.'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Displays/Alert',
  component: Alert,
}

export const Success = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const SuccessWithIcon = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const Danger = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const DangerWithIcon = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const Info = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const InfoWithIcon = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const Warning = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const WarningWithIcon = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

export const Closable = (args: any) => (
  <Alert {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
    labore.
  </Alert>
)

Success.args = {
  title: 'Success alert',
  isVisible: true,
}

SuccessWithIcon.args = {
  title: 'Success alert with icon',
  withIcon: true,
  isVisible: true,
}

Danger.args = {
  title: 'Danger alert',
  variant: 'danger',
  isVisible: true,
}

DangerWithIcon.args = {
  title: 'Danger alert with icon',
  variant: 'danger',
  withIcon: true,
  isVisible: true,
}

Info.args = {
  title: 'Info alert',
  variant: 'info',
  isVisible: true,
}

InfoWithIcon.args = {
  title: 'Info alert with icon',
  variant: 'info',
  withIcon: true,
  isVisible: true,
}

Warning.args = {
  title: 'Warning alert',
  variant: 'warning',
  isVisible: true,
}

WarningWithIcon.args = {
  title: 'Warning alert with icon',
  variant: 'warning',
  withIcon: true,
  isVisible: true,
}

Closable.args = {
  title: 'Closable alert',
  closable: true,
  isVisible: true,
}
