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
      d="M3 11V5h19v6H3Zm0 8h6v-7H3v7Zm7 0h12v-7H10v7Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
