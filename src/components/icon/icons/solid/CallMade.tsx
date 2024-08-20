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
    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9Z" />
  </svg>
)

export default Icon
