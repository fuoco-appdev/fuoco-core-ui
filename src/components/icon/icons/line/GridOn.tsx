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
    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM8 20H4v-4h4v4Zm0-6H4v-4h4v4Zm0-6H4V4h4v4Zm6 12h-4v-4h4v4Zm0-6h-4v-4h4v4Zm0-6h-4V4h4v4Zm6 12h-4v-4h4v4Zm0-6h-4v-4h4v4Zm0-6h-4V4h4v4Z" />
  </svg>
)

export default Icon
