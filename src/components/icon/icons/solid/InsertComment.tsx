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
      d="M4 2h16c1.1 0 2 .9 2 2v18l-4-4H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2Zm2 12h12v-2H6v2Zm12-3H6V9h12v2ZM6 8h12V6H6v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
