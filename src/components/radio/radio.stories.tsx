import React from 'react'

import { action } from '@storybook/addon-actions'

import Radio from '.'
import { RadioProps } from './radio'

const options: RadioProps[] = [
  {
    id: '1',
    label: 'Comments',
    description:
      'Get notified when someones posts a comment on a posting. Get notified when someones posts a comment on a posting Get notified when someones posts a comment on a posting.',
    value: '1',
    rightContent: () => <div style={{}}>$CA20,00</div>,
  },
  {
    id: '2',
    label: 'Candidates',
    description: 'Get notified when a candidate applies for a job.',
    value: '2',
  },
  {
    id: '3',
    label: 'Offers',
    description: 'Get notified when a candidate accepts or rejects an offer.',
    value: '3',
  },
]

export default {
  title: 'Data Input/Radio',
  component: Radio,
  argTypes: { onChange: { action: 'onChange' } },
}

interface onToggleProps {
  e?: any
}

export const Default = (args: any) => (
  <Radio.Group {...args} activeId={'1'} onChange={action('onChange')}>
    {options.map((x, i) => (
      <Radio
        name="sbui-radiogroup"
        id={x.id}
        key={i}
        label={x.label}
        description={x.description}
        value={x.value}
        rightContent={x.rightContent}
      />
    ))}
  </Radio.Group>
)

export const withOptionsObj = (args: any) => <Radio.Group {...args} />

export const withCards = (args: any) => <Radio.Group {...args} />

export const withCardsRightContent = (args: any) => <Radio.Group {...args} />

export const withBeforeAndAfterLabels = (args: any) => <Radio.Group {...args} />

Default.args = {
  className: 'font-sans',
  descriptionText: 'This is optional description',
  disabled: false,
  error: '',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
  layout: 'vertical',
  name: 'radiogroup-example-1',
}

withOptionsObj.args = {
  className: 'font-sans',
  descriptionText: 'This is optional description',
  disabled: false,
  error: '',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
  layout: 'vertical',
  name: 'radiogroup-example-2',
  options: options,
  activeId: '1',
}

withCards.args = {
  className: 'font-sans',
  descriptionText: 'This is optional description',
  disabled: false,
  error: '',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
  layout: 'vertical',
  name: 'radiogroup-example-3',
  options: options,
  type: 'cards',
  activeId: '1',
}

withBeforeAndAfterLabels.args = {
  label: 'Label',
  beforeLabel: 'Before : ',
  afterLabel: ' : After',
  options: [
    {
      label: 'Label',
      beforeLabel: 'Before : ',
      afterLabel: ' : After',
      description: 'Description',
    },
  ],
  activeId: '1',
}
