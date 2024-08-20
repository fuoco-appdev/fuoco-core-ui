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
      d="M13 13h3l-4 4-4-4h3V3h2v10Zm-9 8v-2h16v2H4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
