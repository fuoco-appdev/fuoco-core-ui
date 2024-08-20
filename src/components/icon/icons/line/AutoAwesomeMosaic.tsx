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
    <path d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2Zm6 14H5V5h4v14Z" />
    <path d="M19 3h-6v8h8V5c0-1.1-.9-2-2-2Zm0 6h-4V5h4v4Z" />
    <path d="M13 21h6c1.1 0 2-.9 2-2v-6h-8v8Zm2-6h4v4h-4v-4Z" />
  </svg>
)

export default Icon
