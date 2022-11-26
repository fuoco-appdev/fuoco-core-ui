import React from 'react'
import { IconLoader } from '../icon/icons/icon-loader'
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
      {active && (
        <IconLoader
          size="xlarge"
          className={LoadingStyles['sbui-loading-spinner']}
        />
      )}
    </div>
  )
}
