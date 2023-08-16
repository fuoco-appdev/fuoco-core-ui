import React, { useState } from 'react'
import { Button } from '../button'
import { Email } from '../icon/icons/line'
import { Line, Typography } from '../../index'

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

export function VerticalText() {
  const [isExanded, setIsExpanded] = useState<boolean>(false)

  return (
    <div>
      <Button
        rounded={true}
        onClick={() => setIsExpanded(!isExanded)}
        icon={<Line.Menu size={24} />}
      />
      <div style={{ width: isExanded ? '256px' : '56px' }}>
        <Tabs
          activeId={'panel-1'}
          direction={'vertical'}
          type={'underlined'}
          tabs={[
            {
              id: 'panel-1',
              icon: <Email size={24} />,
              label: isExanded ? 'Email 123' : '',
            },
            {
              id: 'panel-2',
              icon: <Email size={24} />,
              label: isExanded ? 'Email 12' : '',
            },
            {
              id: 'panel-3',
              icon: <Email size={24} />,
              label: isExanded ? 'Email 12345' : '',
            },
          ]}
        />
      </div>
    </div>
  )
}

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

export const Flex = (args: any) => (
  <Tabs
    {...args}
    flex={true}
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

Flex.args = {
  type: 'underlined',
}
