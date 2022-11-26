import React from 'react'
import Typography from '../typography'
// import { AutoForm } from 'uniforms'

import { Card } from '.'

export default {
  title: 'Displays/Card',
  component: Card,
}

export const Default = (args: any) => (
  <Card {...args}>
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

export const withHover = (args: any) => <Card {...args}></Card>

Default.args = {
  title: 'I am a title',
  titleExtra: <Typography.Link>Learn more</Typography.Link>,
}

withHover.args = {
  hoverable: true,
}
