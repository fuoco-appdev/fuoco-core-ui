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
      d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2Zm0 15H5l5-6v6Zm4-15h5c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2h-5v-9l5 6V5h-5V3Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
