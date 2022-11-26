import React from 'react'
// @ts-ignore
import { IconAlertCircle } from '../../components/icon/icons/icon-alert-circle'
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
      <IconAlertCircle
        size={size}
        strokeWidth={2}
        stroke={'#f56565'}
        className=""
      />
    </div>
  )
}
