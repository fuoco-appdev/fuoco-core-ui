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
    <path d="M15 4v2h3v12h-3v2h5V4h-5Z" />
    <path d="M4 20h5v-2H6V6h3V4H4v16Z" />
  </svg>
)

export default Icon
