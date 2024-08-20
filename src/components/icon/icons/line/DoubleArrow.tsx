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
    <path d="M15.25 5h-4.5l5 7-5 7h4.5l5-7-5-7Z" />
    <path d="M8.25 5h-4.5l5 7-5 7h4.5l5-7-5-7Z" />
  </svg>
)

export default Icon
