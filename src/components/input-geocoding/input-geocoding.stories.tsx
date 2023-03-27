/* eslint-disable import/no-anonymous-default-export */
import { useRef, useState } from 'react'
import { InputGeocoding } from '.'
import { LocationOn } from '../icon/icons/line'

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

export const WithIcon = (args: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [mapPinIconLit, setMapPinIconLit] = useState<boolean>(false)
  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <InputGeocoding
        {...args}
        parentRef={containerRef}
        icon={<LocationOn stroke={mapPinIconLit ? '#4AFFFF' : '#d1d5db'} />}
        onFocus={() => setMapPinIconLit(true)}
        onBlur={() => setMapPinIconLit(false)}
        onMouseEnter={() => setMapPinIconLit(true)}
        onMouseLeave={(e: React.MouseEvent<HTMLInputElement>) => {
          if (document.activeElement !== e.currentTarget) {
            setMapPinIconLit(false)
          }
        }}
      />
    </div>
  )
}

export const DefaultCoordinates = (args: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <InputGeocoding {...args} parentRef={containerRef} />
    </div>
  )
}

export const DefaultWithError = (args: any) => <InputGeocoding {...args} />

export const TouchScreen = (args: any) => {
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
      <InputGeocoding {...args} parentRef={containerRef} touchScreen={true} />
    </div>
  )
}

Default.args = {
  mapboxAccessToken:
    'pk.eyJ1IjoibHVjYXNmdW9jbyIsImEiOiJjbGFjeWl5YWMwM2MyM3ZueW5xNnRnbWFiIn0.SKWlyHhXNfAwdTLqfIdLYQ',
  label: 'Location',
  layout: 'vertical',
  onLocationChanged: (value: string, feature: any) => console.log(feature),
}

WithIcon.args = {
  mapboxAccessToken:
    'pk.eyJ1IjoibHVjYXNmdW9jbyIsImEiOiJjbGFjeWl5YWMwM2MyM3ZueW5xNnRnbWFiIn0.SKWlyHhXNfAwdTLqfIdLYQ',
  label: 'Location',
  layout: 'vertical',
  onLocationChanged: (value: string, feature: any) => console.log(feature),
}

DefaultCoordinates.args = {
  mapboxAccessToken:
    'pk.eyJ1IjoibHVjYXNmdW9jbyIsImEiOiJjbGFjeWl5YWMwM2MyM3ZueW5xNnRnbWFiIn0.SKWlyHhXNfAwdTLqfIdLYQ',
  label: 'Location',
  layout: 'vertical',
  defaultCoordinates: [-74.587974, 46.132518],
  onLocationChanged: (value: string, feature: any) => console.log(feature),
}

TouchScreen.args = {
  mapboxAccessToken:
    'pk.eyJ1IjoibHVjYXNmdW9jbyIsImEiOiJjbGFjeWl5YWMwM2MyM3ZueW5xNnRnbWFiIn0.SKWlyHhXNfAwdTLqfIdLYQ',
  label: 'Location',
  layout: 'vertical',
  defaultCoordinates: [-74.587974, 46.132518],
  onLocationChanged: (value: string, feature: any) => console.log(feature),
}

DefaultWithError.args = {
  mapboxAccessToken:
    'pk.eyJ1IjoibHVjYXNmdW9jbyIsImEiOiJjbGFjeWl5YWMwM2MyM3ZueW5xNnRnbWFiIn0.SKWlyHhXNfAwdTLqfIdLYQ',
  label: 'Location',
  layout: 'vertical',
  error: 'Not a valid location',
}
