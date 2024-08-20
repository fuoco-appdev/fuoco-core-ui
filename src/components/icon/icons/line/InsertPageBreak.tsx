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
    <path d="M18 20H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2v3Z" />
    <path d="M6 4h7v5h5v2h2V8l-6-6H6c-1.1 0-2 .9-2 2v7h2V4Z" />
    <path d="M15 13H9v2h6v-2Z" />
    <path d="M23 13h-6v2h6v-2Z" />
    <path d="M7 13H1v2h6v-2Z" />
  </svg>
)

export default Icon
