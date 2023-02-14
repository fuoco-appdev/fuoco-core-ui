import React, { useState } from 'react'

import { Loading } from '.'
import { Card } from '../card'

export default {
  title: 'Utilities/Loading',
  component: Loading,
}

export const Default = (args: any) => {
  return (
    <>
      <Loading {...args}>
        <Card></Card>
      </Loading>
    </>
  )
}

Default.args = {
  active: true,
}
