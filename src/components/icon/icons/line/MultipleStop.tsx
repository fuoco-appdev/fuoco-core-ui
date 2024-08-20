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
    <path d="m17 4 4 4-4 4V9h-4V7h4V4Zm-7 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1ZM6 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm1 10h4v-2H7v-3l-4 4 4 4v-3Zm7 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1Zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1Z" />
  </svg>
)

export default Icon
