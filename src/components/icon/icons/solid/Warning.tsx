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
      d="M23 21 12 2 1 21h22Zm-12-3v-2h2v2h-2Zm0-4h2v-4h-2v4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
