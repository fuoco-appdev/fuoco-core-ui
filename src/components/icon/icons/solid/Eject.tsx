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
      d="M5.33 15 12 5l6.67 10H5.33ZM19 19v-2H5v2h14Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
