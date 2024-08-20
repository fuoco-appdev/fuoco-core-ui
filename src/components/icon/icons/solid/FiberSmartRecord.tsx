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
      d="M17 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm0-5.65V4.26c3.45.89 6 4.01 6 7.74 0 3.73-2.55 6.85-6 7.74v-2.09a5.99 5.99 0 0 0 0-11.3Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
