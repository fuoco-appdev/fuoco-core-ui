import React from 'react'
import { Refresh } from '../icon/icons/line'
// @ts-ignore
import LoadingStyles from './loading.module.scss'

interface Props {
  children: React.ReactNode
  active: boolean
}
export default function Loading({ children, active }: Props) {
  let classNames = [LoadingStyles['sbui-loading']]
  if (active) {
    classNames.push(LoadingStyles['sbui-loading--active'])
  }

  return (
    <div className={classNames.join(' ')}>
      <div className={LoadingStyles['sbui-loading-content']}>{children}</div>
      {active && <Refresh className={LoadingStyles['sbui-loading-spinner']} />}
    </div>
  )
}
