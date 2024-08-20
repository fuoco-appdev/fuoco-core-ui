import React from 'react'

import { action } from '@storybook/addon-actions'

import { Slider } from '.'
import { SliderProps } from './slider'
import { FormLayout } from '../../lib/layout/form-layout'

export default {
  title: 'Data Input/Slider',
  component: Slider,
}

export function Default() {
  const [value, setValue] = React.useState<number>(0)
  return (
    <Slider value={value} onChange={(value) => setValue(value)} marks={0} />
  )
}

export function Location() {
  const [value, setValue] = React.useState<number>(0)
  return (
    <FormLayout label={'Location'} afterLabel={`${value} km`}>
      <Slider value={value} onChange={(value) => setValue(value)} marks={0} />
    </FormLayout>
  )
}
