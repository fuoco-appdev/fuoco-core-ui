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
    <path d="M16 13h-3V3h-2v10H8l4 4 4-4ZM4 19v2h16v-2H4Z" />
  </svg>
)

export default Icon
