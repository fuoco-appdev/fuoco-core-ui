import React, { useEffect, useState } from 'react'
import ListWrap from './list-wrap'
import shuffle from 'lodash.shuffle'

export default {
  title: 'List/ListWrap',
  component: ListWrap,
}

const ListItemElement = (color: string) => {
  return (
    <div
      style={{
        height: '300px',
        width: '300px',
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
      height: 316,
      element: () => ListItemElement('red'),
    },
    {
      key: '2',
      height: 316,
      element: () => ListItemElement('blue'),
    },
    {
      key: '3',
      height: 316,
      element: () => ListItemElement('green'),
    },
    {
      key: '4',
      height: 316,
      element: () => ListItemElement('red'),
    },
    {
      key: '5',
      height: 316,
      element: () => ListItemElement('blue'),
    },
    {
      key: '6',
      height: 316,
      element: () => ListItemElement('green'),
    },
    {
      key: '7',
      height: 316,
      element: () => ListItemElement('red'),
    },
    {
      key: '8',
      height: 316,
      element: () => ListItemElement('blue'),
    },
    {
      key: '9',
      height: 316,
      element: () => ListItemElement('green'),
    },
  ])
  useEffect(() => {
    const t = setInterval(() => setChildren(shuffle), 2000)
    return () => clearInterval(t)
  }, [])

  return <ListWrap items={children} />
}
