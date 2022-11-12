/* eslint-disable import/no-anonymous-default-export */
import { useRef } from 'react'
import { InputGeocoding } from '.'

export default {
  title: 'Data Input/InputGeocoding',
  component: InputGeocoding,
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
      <InputGeocoding {...args} parentRef={containerRef} />
    </div>
  )
}

export const DefaultWithError = (args: any) => <InputGeocoding {...args} />

Default.args = {
  mapboxAccessToken: 'pk.eyJ1IjoibHVjYXNmdW9jbyIsImEiOiJjbGFjeWl5YWMwM2MyM3ZueW5xNnRnbWFiIn0.SKWlyHhXNfAwdTLqfIdLYQ',
  label: 'Location',
  layout: 'vertical',
  onLocationChanged: (value: string, feature: any) => console.log(feature),
}

DefaultWithError.args = {
  label: 'Location',
  layout: 'vertical',
  error: 'Not a valid location',
}
