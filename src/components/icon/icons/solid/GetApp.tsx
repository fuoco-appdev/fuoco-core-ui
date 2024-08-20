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
      d="M15 9h4l-7 7-7-7h4V3h6v6ZM5 20v-2h14v2H5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
