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
      d="M3 5V3h18v2H3Zm4 11-4-4 4-4v8Zm14 1H11v-2h10v2ZM3 21h18v-2H3v2Zm8-12h10V7H11v2Zm10 4H11v-2h10v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
