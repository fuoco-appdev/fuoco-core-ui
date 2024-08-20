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
    <path d="M4.5 14.5h2V7.91L18.09 19.5l1.41-1.41L7.91 6.5h6.59v-2h-10v10Z" />
  </svg>
)

export default Icon
