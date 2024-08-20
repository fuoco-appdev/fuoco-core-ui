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
      d="M7 7h10v3l4-4-4-4v3H5v6h2V7Zm12 6h-2v4H7v-3l-4 4 4 4v-3h12v-6Zm-6-4v6h-1.5v-4H10v-1l2-1h1Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
