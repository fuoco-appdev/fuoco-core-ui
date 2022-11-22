/* eslint-disable import/no-anonymous-default-export */
import { useRef } from 'react'
import { InputPhoneNumber } from '.'

export default {
  title: 'Data Input/InputPhoneNumber',
  component: InputPhoneNumber,
}

export const Default = (args: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <InputPhoneNumber {...args} parentRef={containerRef} />
    </div>
  )
}

export const DefaultWithError = (args: any) => <InputPhoneNumber {...args} />

Default.args = {
  label: 'Phone number',
  layout: 'vertical',
  country: 'ca',
  defaultValue: '11234567890',
  onChange: (value: string) => console.log(value),
}

DefaultWithError.args = {
  label: 'Phone number',
  layout: 'vertical',
  country: 'ca',
  error: 'Field cannot be empty',
}
