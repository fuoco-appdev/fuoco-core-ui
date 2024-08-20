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
      d="M12 20 3 4h18l-9 16Zm5.63-14H6.38L12 16l5.63-10Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
