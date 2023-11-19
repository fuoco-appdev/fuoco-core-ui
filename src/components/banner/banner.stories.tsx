import React, { useState } from 'react'

import { Banner } from '.'
import { Button } from '../button/index'
import { BannerProps } from './banner'
import { Line } from '../icon'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Overlays/Banner',
  component: Banner,
}

export const Default = (args: any) => {
  const [banners, setBanners] = useState<BannerProps[]>([])
  return (
    <div
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            setBanners([
              {
                key: `test-${Math.random()}`,
                title: 'BLACK FRIDAY SALE',
                subtitle: 'Le Grill',
                description:
                  '20% off all wines that have a vintage greater than 2020.',
                footerText: 'Ends on Friday, 18, 2023, 24:00',
                icon: <Line.Sell size={40} color={'#000'} />,
              },
            ])
          }}
        >
          Add Banner
        </Button>
      </div>

      <Banner.BannerOverlay {...args} banners={banners} />
    </div>
  )
}

export const TransitionDown = (args: any) => {
  const [banners, setBanners] = useState<BannerProps[]>([])
  return (
    <div
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            setBanners([
              {
                key: `test-${Math.random()}`,
                title: 'Test',
                description: 'This is a test!',
              },
            ])
          }}
        >
          Add Banner
        </Button>
      </div>

      <Banner.BannerOverlay {...args} transition="down" banners={banners} />
    </div>
  )
}

export const TouchScreen = (args: any) => {
  const [banners, setBanners] = useState<BannerProps[]>([])
  return (
    <div
      style={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div>
        <Button
          type={'primary'}
          onClick={() => {
            setBanners([
              {
                key: `test-${Math.random()}`,
                title: 'BLACK FRIDAY SALE',
                subtitle: 'Le Grill',
                description:
                  '20% off all wines that have a vintage greater than 2020.',
                footerText: 'Ends on Friday, 18, 2023, 24:00',
                icon: <Line.Sell size={40} color={'#000'} />,
              },
            ])
          }}
        >
          Add Banner
        </Button>
      </div>

      <Banner.BannerOverlay
        {...args}
        banners={banners}
        align={'center'}
        transition={'up'}
        touchScreen={true}
      />
    </div>
  )
}
