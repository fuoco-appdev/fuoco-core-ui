import React from 'react'
import { Error } from '../../components/icon/icons/solid'
// @ts-ignore
import InputErrorIconStyles from './input-error-icon.module.scss'

interface Props {
  style?: React.CSSProperties
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
}

export default function InputErrorIcon({ style, size }: Props) {
  return (
    <div
      className={InputErrorIconStyles['sbui-input-error-icon']}
      style={style}
    >
      <Error stroke={'#f56565'} className="" />
    </div>
  )
}
