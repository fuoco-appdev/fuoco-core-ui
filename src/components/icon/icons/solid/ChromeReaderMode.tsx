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
      d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 15h-9V6h9v13Zm-1-9.5h-7V11h7V9.5ZM13 12h7v1.5h-7V12Zm7 2.5h-7V16h7v-1.5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
