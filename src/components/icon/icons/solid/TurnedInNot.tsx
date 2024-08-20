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
      d="M7 3h10c1.1 0 2 .9 2 2v16l-7-3-7 3 .01-16c0-1.1.89-2 1.99-2Zm5 12.82L17 18V5H7v13l5-2.18Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
