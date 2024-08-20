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
    <path d="M16 18v2H8v-2h8ZM11 7.99V16h2V7.99h3L12 4 8 7.99h3Z" />
  </svg>
)

export default Icon
