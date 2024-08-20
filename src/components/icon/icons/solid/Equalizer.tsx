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
    <path
      fillRule="evenodd"
      d="M10 20h4V4h-4v16Zm-6 0h4v-8H4v8Zm12 0V9h4v11h-4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
