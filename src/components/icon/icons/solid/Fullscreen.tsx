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
      d="M7 10H5V5h5v2H7v3Zm-2 4h2v3h3v2H5v-5Zm12 3h-3v2h5v-5h-2v3ZM14 7V5h5v5h-2V7h-3Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
