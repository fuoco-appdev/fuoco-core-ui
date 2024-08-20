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
    <path d="M22 7h-9v2h9V7Z" />
    <path d="M22 15h-9v2h9v-2Z" />
    <path d="M22 11h-6v2h6v-2Z" />
    <path d="M13 12 8 7v4H2v2h6v4l5-5Z" />
  </svg>
)

export default Icon
