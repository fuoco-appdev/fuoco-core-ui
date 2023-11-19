import React, { ComponentProps, useEffect, useMemo, useState } from 'react'
import { Refresh, Close } from '../icon/icons/line'
import { Error, CheckCircle } from '../icon/icons/solid'
import { Button } from '../button/index'
// @ts-ignore
import BannerStyles from './banner.module.scss'
import { Typography } from '../../index'
import { useTransition, animated, SpringValue } from 'react-spring'
import { X } from '../icon/icon-import-handler'
import { ButtonClasses } from '../button/button'

export interface BannerProps {
  key: string
  classNames?: BannerClasses
  iconColor?: string
  refCallback?: (ref: HTMLDivElement | null) => void
  icon?: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
  footerText?: string
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
  touchScreen?: boolean
}

export interface BannerClasses {
  container?: string
  closeButton?: ButtonClasses
  details?: string
  content?: string
  title?: string
  subtitle?: string
  description?: string
  footerText?: string
  iconContainer?: string
  textContainer?: string
  detailsContent?: string
  detailsActions?: string
  closeContainer?: string
}

function Banner({
  key,
  classNames,
  iconColor = '#000',
  refCallback,
  icon,
  title,
  subtitle,
  description,
  footerText,
  onClose,
  touchScreen,
}: BannerProps) {
  let containerClasses = [
    BannerStyles['banner-container'],
    classNames?.container,
  ]
  if (touchScreen) {
    containerClasses.push(BannerStyles['banner-container-touchscreen'])
  }

  let closeButtonClasses = [BannerStyles['banner-close-button']]

  let detailsClasses = [BannerStyles['banner-details'], classNames?.details]
  return (
    <div ref={refCallback} className={containerClasses.join(' ')}>
      <div
        className={[BannerStyles['banner-content'], classNames?.content].join(
          ' '
        )}
      >
        <Typography.Text
          className={[
            BannerStyles['banner-icon-container'],
            classNames?.iconContainer,
          ].join(' ')}
        >
          {icon && icon}
        </Typography.Text>
        <div
          className={[
            BannerStyles['banner-text-container'],
            classNames?.textContainer,
          ].join(' ')}
        >
          <div className={detailsClasses.join(' ')}>
            <div
              className={[
                BannerStyles['banner-details__content'],
                classNames?.detailsContent,
              ].join(' ')}
            >
              <div
                className={[
                  BannerStyles['banner-title'],
                  classNames?.title,
                ].join(' ')}
              >
                {title}
              </div>
              {subtitle && (
                <div
                  className={[
                    BannerStyles['banner-subtitle'],
                    classNames?.subtitle,
                  ].join(' ')}
                >
                  {subtitle}
                </div>
              )}
              {description && (
                <div
                  className={[
                    BannerStyles['banner-description'],
                    classNames?.description,
                  ].join(' ')}
                >
                  {description}
                </div>
              )}
              {footerText && (
                <div
                  className={[
                    BannerStyles['banner-footer-text'],
                    classNames?.footerText,
                  ].join(' ')}
                >
                  {footerText}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={[
            BannerStyles['banner-close-container'],
            classNames?.closeContainer,
          ].join(' ')}
        >
          <Button
            touchScreen={touchScreen}
            type={'text'}
            rounded={true}
            classNames={{
              container: closeButtonClasses.join(' '),
              ...classNames?.closeButton,
            }}
            icon={
              <Close
                size={24}
                strokeWidth={0}
                aria-hidden="true"
                stroke={iconColor}
                color={iconColor}
              />
            }
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  )
}

export interface BannerOverlayProps {
  banners: BannerProps[]
  classNames?: BannerOverlayClasses
  align?: 'left' | 'right' | 'center'
  transition?: 'up' | 'down'
  touchScreen?: boolean
}

export interface BannerOverlayClasses {
  root?: string
  overlayContainer?: string
  banner?: BannerClasses
}

export function BannerOverlay({
  banners,
  classNames,
  align = 'right',
  transition = 'up',
  touchScreen = false,
}: BannerOverlayProps) {
  const refMap = useMemo(() => new WeakMap<any, HTMLDivElement>(), [])
  const cancelMap = useMemo(() => new WeakMap<any, any>(), [])
  const [items, setItems] = useState<BannerProps[]>(banners)

  const transitions = useTransition(items, {
    from: { opacity: 0, height: 0, life: '100%' },
    keys: (item: BannerProps) => item.key,
    enter: (item: BannerProps) => async (next, cancel) => {
      cancelMap.set(item, cancel)
      await next({
        opacity: 1,
        height: refMap.get(item)?.offsetHeight,
      })
      await next({ life: '0%' })
    },
    leave: (item: BannerProps) => async (next, cancel) => {
      await next({ opacity: 0 })
      await next({
        height: 0,
      })
    },
    onRest: (result, ctrl, item) => {
      setItems((state) =>
        state.filter((i) => {
          return i.key !== item.key
        })
      )
    },
    config: (item, index, phase) => (key) =>
      phase === 'enter' && key === 'life'
        ? { duration: Number.MAX_VALUE }
        : {
            tension: 1000,
            friction: 30,
            bounce: 0,
            precision: 0.1,
          },
  })

  useEffect(() => {
    setItems((state) => [...state, ...banners])
  }, [banners])

  return (
    <div className={[BannerStyles['banner-root'], classNames?.root].join(' ')}>
      <div
        className={[
          BannerStyles['banner-overlay-container'],
          BannerStyles[`banner-overlay-container-${align}`],
          BannerStyles[`banner-overlay-container-${transition}`],
          classNames?.overlayContainer,
        ].join(' ')}
      >
        {transitions(({ ...style }, item) => (
          <animated.div style={style}>
            <Banner
              {...item}
              classNames={classNames?.banner}
              touchScreen={touchScreen}
              onClose={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                setTimeout(() => {
                  if (cancelMap && cancelMap.has(item)) {
                    cancelMap.get(item)()
                  }
                }, 150)
              }}
              refCallback={(ref: HTMLDivElement | null) => {
                if (ref && item?.key) {
                  refMap.set(item, ref)
                }
              }}
            />
          </animated.div>
        ))}
      </div>
    </div>
  )
}

Banner.BannerOverlay = BannerOverlay
Banner.Banner = Banner

export default Banner
