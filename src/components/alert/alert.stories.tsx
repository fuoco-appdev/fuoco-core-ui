import { Meta, StoryObj } from '@storybook/react'
import { Alert } from '.'

const meta: Meta = {
  title: 'Displays/Alert',
  component: Alert,
}

export default meta

type Story = StoryObj<typeof Alert>

export const Success: Story = {
  render: () => (
    <Alert title={'Success alert'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
      labore.
    </Alert>
  ),
}

export const SuccessWithIcon: Story = {
  render: () => (
    <Alert title={'Success alert with icon'} withIcon={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
      labore.
    </Alert>
  ),
}

export const Danger: Story = {
  render: () => (
    <Alert title={'Danger alert'} variant={'danger'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
      labore.
    </Alert>
  ),
}

export const DangerWithIcon: Story = {
  render: () => (
    <Alert title={'Danger alert with icon'} variant={'danger'} withIcon={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
      labore.
    </Alert>
  ),
}

export const Info: Story = {
  render: () => (
    <Alert title={'Info alert'} variant={'info'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
      labore.
    </Alert>
  ),
}

export const InfoWithIcon: Story = {
  render: () => (
    <Alert title={'Info alert with icon'} variant={'info'} withIcon={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
      labore.
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert title={'Warning alert'} variant={'warning'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
      labore.
    </Alert>
  ),
}

export const WarningWithIcon: Story = {
  render: () => (
    <Alert
      title={'Warning alert with icon'}
      variant={'warning'}
      withIcon={true}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
      labore.
    </Alert>
  ),
}

export const Closable: Story = {
  render: () => (
    <Alert title={'Closable alert'} closable={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
      labore.
    </Alert>
  ),
}
