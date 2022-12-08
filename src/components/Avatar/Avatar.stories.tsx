import React, { useState } from 'react'
import { IconAirplay } from '../icon/icons/icon-airplay'

import Avatar from './avatar'

export default {
  title: 'General/Avatar',
  component: Avatar,
}

export const Image = (args: any) => {
  return (
    <>
      <Avatar {...args} />
    </>
  )
}

export const Text = (args: any) => {
  return (
    <>
      <Avatar {...args} />
    </>
  )
}

export const Icon = (args: any) => {
  return (
    <>
      <Avatar {...args} />
    </>
  )
}

export const Edit = (args: any) => {
  const [imageURL, setImageURL] = useState<string | undefined>()
  return (
    <>
      <Avatar
        {...args}
        onChange={(url: string) => setImageURL(url)}
        src={imageURL}
      />
    </>
  )
}

Image.args = {
  src: 'https://via.placeholder.com/150',
}

Text.args = {
  text: 'Shoury',
}

Icon.args = {
  AvatarIcon: IconAirplay,
}

Edit.args = {
  AvatarIcon: IconAirplay,
  editMode: true,
}
