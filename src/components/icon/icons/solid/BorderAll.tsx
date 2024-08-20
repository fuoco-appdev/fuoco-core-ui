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
      d="M3 3v18h18V3H3Zm8 16H5v-6h6v6Zm-6-8h6V5H5v6Zm14 8h-6v-6h6v6Zm-6-8h6V5h-6v6Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
