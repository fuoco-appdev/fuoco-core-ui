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
      d="M12.5 12 4 18V6l8.5 6Zm9 0L13 18V6l8.5 6Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
