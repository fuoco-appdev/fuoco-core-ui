import React, { useState } from 'react'
import { Button } from '../button'
import { Email } from '../icon/icons/line'
import { Line, Typography } from '../../index'

import { Tabs } from '.'

export default {
  title: 'Displays/Tabs',
  component: Tabs,
}

export function Default() {
  const [selectedId, setSelectedId] = useState<string>('panel-1')

  return (
    <Tabs
      activeId={selectedId}
      onChange={(id) => setSelectedId(id)}
      tabs={[
        {
          id: 'panel-1',
          label: '1st tab',
        },
        {
          id: 'panel-2',
          label: '2st tab',
        },
        {
          id: 'panel-3',
          label: '3st tab',
        },
        {
          id: 'panel-4',
          label: '4th tab',
        },
        {
          id: 'panel-5',
          label: '5th tab',
        },
        {
          id: 'panel-6',
          label: '6th tab',
        },
        {
          id: 'panel-7',
          label: '7th tab',
        },
      ]}
    />
  )
}

export function Underlined() {
  const [selectedId, setSelectedId] = useState<string>('panel-1')

  return (
    <Tabs
      activeId={selectedId}
      onChange={(id) => setSelectedId(id)}
      type={'underlined'}
      tabs={[
        {
          id: 'panel-1',
          label: '1st tab',
        },
        {
          id: 'panel-2',
          label: '2st tab',
        },
        {
          id: 'panel-3',
          label: '3st tab',
        },
        {
          id: 'panel-4',
          label: '4th tab',
        },
        {
          id: 'panel-5',
          label: '5th tab',
        },
        {
          id: 'panel-6',
          label: '6th tab',
        },
        {
          id: 'panel-7',
          label: '7th tab',
        },
      ]}
    />
  )
}

export function IconsAndText() {
  return (
    <Tabs
      type={'nav'}
      activeId={'panel-1'}
      tabs={[
        {
          id: 'panel-1',
          label: '1st tab',
          icon: <Email size={23} />,
        },
        {
          id: 'panel-2',
          label: '2st tab',
          icon: <Email size={23} />,
        },
        {
          id: 'panel-3',
          label: '3st tab',
          icon: <Email size={23} />,
        },
      ]}
    />
  )
}

export function Vertical() {
  return (
    <Tabs
      type={'nav'}
      direction={'vertical'}
      activeId={'panel-1'}
      tabs={[
        {
          id: 'panel-1',
          icon: <Email size={23} />,
        },
        {
          id: 'panel-2',
          icon: <Email size={23} />,
        },
        {
          id: 'panel-3',
          icon: <Email size={23} />,
        },
      ]}
    />
  )
}

export function VerticalText() {
  const [isExanded, setIsExpanded] = useState<boolean>(false)
  const [selectedId, setSelectedId] = useState<string>('')

  return (
    <div>
      <Button
        rounded={true}
        onClick={() => {
          setIsExpanded(!isExanded)
          //setSelectedId('')
        }}
        icon={<Line.Menu size={24} />}
      />
      <div style={{ width: isExanded ? '256px' : '50px' }}>
        <Tabs
          activeId={selectedId}
          direction={'vertical'}
          type={'nav'}
          onChange={(id) => setSelectedId(id)}
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

export function Nav() {
  return (
    <Tabs
      type={'nav'}
      activeId={'panel-1'}
      tabs={[
        {
          id: 'panel-1',
          label: '1st tab',
        },
        {
          id: 'panel-2',
          label: '2st tab',
        },
        {
          id: 'panel-3',
          label: '3st tab',
        },
      ]}
    />
  )
}

export function Removable() {
  return (
    <Tabs
      activeId={'panel-1'}
      removable={true}
      tabs={[
        {
          id: 'panel-1',
          label: '1st tab',
        },
        {
          id: 'panel-2',
          label: '2st tab',
        },
        {
          id: 'panel-3',
          label: '3st tab',
        },
        {
          id: 'panel-4',
          label: '4th tab',
        },
        {
          id: 'panel-5',
          label: '5th tab',
        },
        {
          id: 'panel-6',
          label: '6th tab',
        },
        {
          id: 'panel-7',
          label: '7th tab',
        },
      ]}
    />
  )
}

export const Flex = (args: any) => (
  <Tabs
    type={'nav'}
    flex={true}
    activeId={'panel-1'}
    tabs={[
      {
        id: 'panel-1',
        label: '1st tab',
      },
      {
        id: 'panel-2',
        label: '2st tab',
      },
      {
        id: 'panel-3',
        label: '3st tab',
      },
    ]}
  />
)
