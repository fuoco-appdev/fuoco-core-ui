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
    <path d="M21 11.01 3 11v2h18v-1.99ZM3 16h12v2H3v-2ZM21 6H3v2.01L21 8V6Z" />
  </svg>
)

export default Icon
