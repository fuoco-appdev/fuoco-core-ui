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
    <path d="M13 15h-2v2h2v-2Z" />
    <path d="M13 7h-2v6h2V7Z" />
    <path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99ZM17 21H7v-1h10v1Zm0-3H7V6h10v12Zm0-14H7V3h10v1Z" />
  </svg>
)

export default Icon
