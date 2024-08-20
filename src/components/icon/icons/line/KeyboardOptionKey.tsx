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
    <path d="M21 5h-6v2h6V5Z" />
    <path d="M9 5H3v2h4.85l6.92 12H21v-2h-5.07L9 5Z" />
  </svg>
)

export default Icon
