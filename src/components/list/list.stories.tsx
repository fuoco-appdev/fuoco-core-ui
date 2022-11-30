import React, { useEffect, useState } from 'react'
import List, { ListItemProps } from './list'
import shuffle from 'lodash.shuffle'
import { RenderStrategy } from '@headlessui/react/dist/utils/render'

export default {
  title: 'List/List',
  component: List,
}

const ListItemElement = (color: string) => {
  return (
    <div
      style={{
        height: '80px',
        borderRadius: '4px',
        boxShadow: '0px 10px 25px -10px rgba(0, 0, 0, 0.2)',
        backgroundColor: color,
        padding: '16px',
      }}
    />
  )
}

export const Default = (args: any) => {
  const [children, setChildren] = useState<
    Array<{
      key: string
      element: () => React.ReactElement
      height: number
    }>
  >([
    {
      key: '1',
      height: 100,
      element: () => ListItemElement('red'),
    },
    {
      key: '2',
      height: 100,
      element: () => ListItemElement('blue'),
    },
    {
      key: '3',
      height: 100,
      element: () => ListItemElement('green'),
    },
  ])
  useEffect(() => {
    const t = setInterval(() => setChildren(shuffle), 2000)
    return () => clearInterval(t)
  }, [])

  return <List items={children} />
}
