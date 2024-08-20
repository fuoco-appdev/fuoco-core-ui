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
    <path d="M14 8.83 17.17 12 14 15.17V14H6v-4h8V8.83ZM12 4v4H4v8h8v4l8-8-8-8Z" />
  </svg>
)

export default Icon
