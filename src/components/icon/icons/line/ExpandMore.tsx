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
    <path d="M16.59 8.295 12 12.875l-4.59-4.58L6 9.705l6 6 6-6-1.41-1.41Z" />
  </svg>
)

export default Icon
