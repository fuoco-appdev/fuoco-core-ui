/* eslint-disable import/no-anonymous-default-export */
import { useRef, useState } from 'react'
import { InputGeocoding } from '.'
import { LocationOn } from '../icon/icons/line'

export default {
  title: 'Data Input/InputGeocoding',
  component: InputGeocoding,
}

export function Default() {
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
      <InputGeocoding
        mapboxAccessToken={''}
        label={'Location'}
        layout={'vertical'}
        onLocationChanged={(value: string, feature: any) =>
          console.log(feature)
        }
      />
    </div>
  )
}

export function WithIcon() {
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
        mapboxAccessToken={''}
        label={'Location'}
        layout={'vertical'}
        onLocationChanged={(value: string, feature: any) =>
          console.log(feature)
        }
        icon={
          <LocationOn
            stroke={mapPinIconLit ? '#4AFFFF' : '#ffffff'}
            strokeWidth={0}
            size={24}
          />
        }
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

export function DefaultCoordinates() {
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
      <InputGeocoding
        mapboxAccessToken={''}
        label={'Location'}
        layout={'vertical'}
        onLocationChanged={(value: string, feature: any) =>
          console.log(feature)
        }
      />
    </div>
  )
}

export function DefaultWithError() {
  return (
    <InputGeocoding
      mapboxAccessToken={''}
      label={'Location'}
      layout={'vertical'}
      onLocationChanged={(value: string, feature: any) => console.log(feature)}
    />
  )
}

export function TouchScreen() {
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
      <InputGeocoding
        mapboxAccessToken={''}
        label={'Location'}
        layout={'vertical'}
        onLocationChanged={(value: string, feature: any) =>
          console.log(feature)
        }
        touchScreen={true}
      />
    </div>
  )
}
