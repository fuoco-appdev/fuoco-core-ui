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
    <path d="M10 18h4v-2h-4v2ZM3 6v2h18V6H3Zm3 7h12v-2H6v2Z" />
  </svg>
)

export default Icon
