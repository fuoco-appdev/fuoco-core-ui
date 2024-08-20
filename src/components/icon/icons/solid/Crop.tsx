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
      d="M7 1v16h16v2h-4v4h-2v-4H7c-1.1 0-2-.9-2-2V7H1V5h4V1h2Zm12 14h-2V7H9V5h8c1.1 0 2 .9 2 2v8Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
