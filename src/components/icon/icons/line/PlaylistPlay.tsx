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
    <path d="M13.5 8.5h-11v2h11v-2Z" />
    <path d="M13.5 4.5h-11v2h11v-2Z" />
    <path d="M9.5 12.5h-7v2h7v-2Z" />
    <path d="M15.5 11.5v8l6-4-6-4Z" />
  </svg>
)

export default Icon
