import React, { useState } from 'react'
import ReactSlider from 'react-slider'
// @ts-ignore
import styles from './slider.module.scss'

export interface SliderProps {
  value?: number
  marks?: number
  min?: number
  max?: number
  defaultValue?: number
  classNames?: SliderClasses
  onChange?: (value: number) => void
}

export interface SliderClasses {
  slider?: string
  sliderThumb?: string
  sliderTrack?: string
  sliderMark?: string
  sliderMarkBefore?: string
  sliderMarkActive?: string
}

function Slider({
  value = 0,
  marks = 20,
  min = 0,
  max = 100,
  defaultValue = 0,
  classNames,
  onChange,
}: SliderProps) {
  return (
    <ReactSlider
      className={[styles['slider'], classNames?.slider].join(' ')}
      thumbClassName={[styles['slider-thumb'], classNames?.sliderThumb].join(
        ' ',
      )}
      trackClassName={[styles['slider-track'], classNames?.sliderTrack].join(
        ' ',
      )}
      markClassName={[styles['slider-mark'], classNames?.sliderMark].join(' ')}
      marks={marks}
      min={min}
      max={max}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      renderMark={(props) => {
        if ((props?.value as number) < value) {
          props.className = [
            styles['slider-mark'],
            classNames?.sliderMark,
            styles['slider-mark-before'],
            classNames?.sliderMarkBefore,
          ].join(' ')
        } else if (props.key === value) {
          props.className = [
            styles['slider-mark'],
            classNames?.sliderMark,
            styles['slider-mark-active'],
            classNames?.sliderMarkActive,
          ].join(' ')
        }
        return <span {...props} />
      }}
    />
  )
}

export default Slider
