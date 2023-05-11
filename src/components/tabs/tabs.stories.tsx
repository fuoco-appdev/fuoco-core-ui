import React from 'react'
import { Button } from '../button'
import { Email } from '../icon/icons/line'
import { Typography } from '../../index'

import { Tabs } from '.'

export default {
  title: 'Displays/Tabs',
  component: Tabs,
}

export const Default = (args: any) => (
  <Tabs
    {...args}
    activeId={'panel-1'}
    tabs={[
      {
        id: 'panel-1',
        label: '1st tab',
        children: (
          <Typography.Text>Content for the first panel</Typography.Text>
        ),
      },
      {
        id: 'panel-2',
        label: '2st tab',
        children: (
          <Typography.Text>Content for the second panel</Typography.Text>
        ),
      },
      {
        id: 'panel-3',
        label: '3st tab',
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
      {
        id: 'panel-4',
        label: '4th tab',
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
      {
        id: 'panel-5',
        label: '5th tab',
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
      {
        id: 'panel-6',
        label: '6th tab',
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
      {
        id: 'panel-7',
        label: '7th tab',
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
    ]}
  />
)

export const IconsAndText = (args: any) => (
  <Tabs
    {...args}
    activeId={'panel-1'}
    tabs={[
      {
        id: 'panel-1',
        label: '1st tab',
        icon: <Email />,
        children: (
          <Typography.Text>Content for the first panel</Typography.Text>
        ),
      },
      {
        id: 'panel-2',
        label: '2st tab',
        icon: <Email />,
        children: (
          <Typography.Text>Content for the second panel</Typography.Text>
        ),
      },
      {
        id: 'panel-3',
        label: '3st tab',
        icon: <Email />,
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
    ]}
  />
)

export const Vertical = (args: any) => (
  <Tabs
    {...args}
    activeId={'panel-1'}
    tabs={[
      {
        id: 'panel-1',
        icon: <Email />,
        children: (
          <Typography.Text>Content for the first panel</Typography.Text>
        ),
      },
      {
        id: 'panel-2',
        icon: <Email />,
        children: (
          <Typography.Text>Content for the second panel</Typography.Text>
        ),
      },
      {
        id: 'panel-3',
        icon: <Email />,
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
    ]}
  />
)

export const Underlined = (args: any) => (
  <Tabs
    {...args}
    activeId={'panel-1'}
    tabs={[
      {
        id: 'panel-1',
        label: '1st tab',
        children: (
          <Typography.Text>Content for the first panel</Typography.Text>
        ),
      },
      {
        id: 'panel-2',
        label: '2st tab',
        children: (
          <Typography.Text>Content for the second panel</Typography.Text>
        ),
      },
      {
        id: 'panel-3',
        label: '3st tab',
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
    ]}
  />
)

export const Removable = (args: any) => (
  <Tabs
    {...args}
    activeId={'panel-1'}
    removable={true}
    tabs={[
      {
        id: 'panel-1',
        label: '1st tab',
        children: (
          <Typography.Text>Content for the first panel</Typography.Text>
        ),
      },
      {
        id: 'panel-2',
        label: '2st tab',
        children: (
          <Typography.Text>Content for the second panel</Typography.Text>
        ),
      },
      {
        id: 'panel-3',
        label: '3st tab',
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
      {
        id: 'panel-4',
        label: '4th tab',
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
      {
        id: 'panel-5',
        label: '5th tab',
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
      {
        id: 'panel-6',
        label: '6th tab',
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
      {
        id: 'panel-7',
        label: '7th tab',
        children: (
          <Typography.Text>Content for the third panel</Typography.Text>
        ),
      },
    ]}
  />
)

Default.args = {}
IconsAndText.args = {
  type: 'underlined',
}
Vertical.args = {
  type: 'underlined',
  direction: 'vertical',
}
Underlined.args = {
  type: 'underlined',
}
