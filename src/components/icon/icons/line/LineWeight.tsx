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
    <path d="M3 17h18v-2H3v2Zm0 3h18v-1H3v1Zm0-7h18v-3H3v3Zm0-9v4h18V4H3Z" />
  </svg>
)

export default Icon
