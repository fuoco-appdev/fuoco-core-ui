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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H5V5h14v14Z" />
    <path d="M9 12H7v5h2v-5Z" />
    <path d="M17 7h-2v10h2V7Z" />
    <path d="M13 14h-2v3h2v-3Z" />
    <path d="M13 10h-2v2h2v-2Z" />
  </svg>
)

export default Icon
