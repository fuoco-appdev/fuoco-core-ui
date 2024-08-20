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
    <path d="M3 21h18v-2H3v2Zm0-4h18v-2H3v2Zm0-4h18v-2H3v2Zm0-4h18V7H3v2Zm0-6v2h18V3H3Z" />
  </svg>
)

export default Icon
