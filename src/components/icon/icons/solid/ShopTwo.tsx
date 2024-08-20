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
      d="M18 3v2h5v11c0 1.11-.89 2-2 2H7c-1.11 0-2-.89-2-2V5h5V3c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2ZM1 9h2v11h16c0 1.11-.89 2-2 2H3c-1.11 0-2-.89-2-2V9Zm11-6h4v2h-4V3Zm0 5v7l5.5-4L12 8Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
