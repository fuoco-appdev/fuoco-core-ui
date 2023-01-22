import React from 'react'
import { Typography } from '../../index'
// import { AutoForm } from 'uniforms'

import { Card } from '.'

export default {
  title: 'Displays/Card',
  component: Card,
}

export const Default = (args: any) => (
  <Card {...args} style={{ width: '10vw', height: '10vh' }}>
    <Typography.Title level={5} style={{ color: 'black' }}>
      Card content
    </Typography.Title>
    <Typography.Title level={5} style={{ color: 'black' }}>
      Card content
    </Typography.Title>
    <Typography.Title level={5} style={{ color: 'black' }}>
      Card content
    </Typography.Title>
  </Card>
)

export const WithHover = (args: any) => (
  <Card
    {...args}
    style={{ width: '10vw', height: '10vh' }}
    hoverable={true}
  ></Card>
)

export const Clickable = (args: any) => (
  <Card
    {...args}
    style={{ width: '10vw', height: '10vh' }}
    hoverable={true}
    clickable={true}
    onClick={() => console.log('click')}
  ></Card>
)

Default.args = {}

WithHover.args = {}

Clickable.args = {}
