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
      d="M3 7V5h18v2H3Zm0 4h18V9H3v2Zm0 8h18v-6H3v6Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
