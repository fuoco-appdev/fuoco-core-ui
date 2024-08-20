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
      d="M4 7V5h16v2H4Zm0 4h16V9H4v2Zm16 4H4v-2h16v2Zm0 4H4v-2h16v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
