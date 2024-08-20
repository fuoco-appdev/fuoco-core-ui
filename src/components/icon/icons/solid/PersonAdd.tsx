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
      d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6Zm1 8c0-2.66 5.33-4 8-4s8 1.34 8 4v2H7v-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
