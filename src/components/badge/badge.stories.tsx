import { Meta, StoryObj } from '@storybook/react'
import { Badge } from '.'

const meta: Meta = {
  title: 'Displays/Badge',
  component: Badge,
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: () => <Badge>Hello world</Badge>,
}

export const WithColor: Story = {
  render: () => <Badge color={'red'}>Hello world</Badge>,
}

export const WithDot: Story = {
  render: () => <Badge dot={true}>Hello world</Badge>,
}

export const Large: Story = {
  render: () => <Badge size={'large'}>Hello world</Badge>,
}

export const WithDotLarge: Story = {
  render: () => (
    <Badge size={'large'} dot={true}>
      Hello world
    </Badge>
  ),
}
