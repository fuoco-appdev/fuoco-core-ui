import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '.'
import { Typography } from '../typography'

const meta: Meta = {
  title: 'Displays/Accordion',
  component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion defaultActiveId={['1']}>
      <Accordion.Item id="1" label="Single Item">
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore.
        </Typography>
      </Accordion.Item>
    </Accordion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item label="1st Item" id={1}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore.
        </Typography>
      </Accordion.Item>
      <Accordion.Item label="2nd Item" id={2}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore.
        </Typography>
      </Accordion.Item>
    </Accordion>
  ),
}

export const MultipleBorder: Story = {
  render: () => (
    <Accordion bordered={true}>
      <Accordion.Item label="1st Item" id={1}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore.
        </Typography>
      </Accordion.Item>
      <Accordion.Item label="2nd Item" id={2}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore.
        </Typography>
      </Accordion.Item>
    </Accordion>
  ),
}

export const WithDefaultActive: Story = {
  render: () => (
    <Accordion defaultActiveId={[1]}>
      <Accordion.Item label="1st Item" id={1}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore.
        </Typography>
      </Accordion.Item>
      <Accordion.Item label="2nd Item" id={2}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore.
        </Typography>
      </Accordion.Item>
    </Accordion>
  ),
}
