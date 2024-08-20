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
      d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93ZM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4Zm0-6c0-4.08 3.05-7.44 7-7.93V9H4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
