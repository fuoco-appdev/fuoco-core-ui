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
    <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7Z" />
  </svg>
)

export default Icon
