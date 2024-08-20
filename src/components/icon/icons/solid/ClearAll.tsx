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
      d="M7 9V7h14v2H7Zm-2 4h14v-2H5v2Zm-2 4h14v-2H3v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
