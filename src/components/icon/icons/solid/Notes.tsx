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
      d="M3 6h18v2L3 8.01V6Zm18 5.01L3 11v2h18v-1.99ZM3 16h12v2H3v-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
