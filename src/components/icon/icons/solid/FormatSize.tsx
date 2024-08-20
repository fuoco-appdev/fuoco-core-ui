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
      d="M9 7V4h13v3h-5v12h-3V7H9Zm-3 5H3V9h9v3H9v7H6v-7Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
