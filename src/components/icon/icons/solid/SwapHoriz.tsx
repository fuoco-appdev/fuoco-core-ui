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
      d="M17.01 5 21 9l-3.99 4v-3H10V8h7.01V5ZM3 15l3.99-4v3H14v2H6.99v3L3 15Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
