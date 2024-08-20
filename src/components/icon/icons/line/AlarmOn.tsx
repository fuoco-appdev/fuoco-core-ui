import * as React from 'react'

const Icon = ({ size = 46, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m10.54 14.625-2.13-2.13-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95Zm6.797-12.72 4.607 3.845-1.28 1.535-4.61-3.843 1.283-1.537Zm-10.675 0 1.282 1.536-4.607 3.844-1.28-1.536 4.606-3.844ZM12 4.095a9 9 0 1 0 .002 18.001A9 9 0 0 0 12 4.095Zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7Z" />
  </svg>
)

export default Icon
