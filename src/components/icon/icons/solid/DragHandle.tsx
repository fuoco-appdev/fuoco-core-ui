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
      d="M4 9h16v2H4V9Zm16 6H4v-2h16v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
