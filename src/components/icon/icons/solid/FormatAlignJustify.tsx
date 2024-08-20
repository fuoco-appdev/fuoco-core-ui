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
      d="M3 5V3h18v2H3Zm0 4h18V7H3v2Zm18 4H3v-2h18v2ZM3 17h18v-2H3v2Zm0 4h18v-2H3v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
