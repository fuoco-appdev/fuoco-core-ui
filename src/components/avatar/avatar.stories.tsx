import React, { useState } from 'react'
import { Airplay } from '../icon/icons/solid'

import Avatar from './avatar'
import { Line } from '../icon'

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
  const [loading, setLoading] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  return (
    <>
      <Avatar
        {...args}
        onChange={(index: number, blob: Blob) => {
          console.log(blob)
          setImageURL(URL.createObjectURL(blob))
          setLoading(false)
          setIsModalVisible(false)
        }}
        src={imageURL}
        loading={loading}
        loadingComponent={<Line.Refresh size={24} />}
        isModalVisible={isModalVisible}
        onLoading={(value) => setLoading(value)}
        onModalVisible={(value) => setIsModalVisible(value)}
      />
    </>
  )
}

export const TouchScreen = (args: any) => {
  const [imageURL, setImageURL] = useState<string | undefined>()
  return (
    <>
      <Avatar
        {...args}
        onChange={(index: number, blob: Blob) => {
          console.log(blob)
          setImageURL(URL.createObjectURL(blob))
        }}
        src={imageURL}
        touchScreen={true}
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
  avatarIcon: <Airplay />,
}

Edit.args = {
  avatarIcon: <Airplay />,
  editMode: true,
  size: 'large',
}

TouchScreen.args = {
  avatarIcon: <Airplay />,
  editMode: true,
}
