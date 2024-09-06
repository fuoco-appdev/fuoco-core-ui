import React, { ChangeEvent, useState } from 'react'
// @ts-ignore
import styles from './slider.module.scss'

export interface SliderProps {
  value?: number
  min?: number
  max?: number
  classNames?: SliderClasses
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface SliderClasses {
  root?: string
  track?: string
  track2?: string
  sliderInput?: string
}

function Slider({
  value = 0,
  min = 0,
  max = 100,
  classNames,
  onChange,
}: SliderProps) {
  const difference = max - min
  return (
    <div className={[styles['root'], classNames?.root].join(' ')}>
      <div className={[styles['track'], classNames?.track].join(' ')} />
      <div
        className={[styles['track2'], classNames?.track2].join(' ')}
        style={{
          width: `${(value * 100) / difference}%`,
        }}
      />
      <input
        type="range"
        className={[styles['slider-input'], classNames?.sliderInput].join(' ')}
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Slider
