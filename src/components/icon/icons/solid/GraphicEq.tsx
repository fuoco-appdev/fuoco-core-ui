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
      d="M11 22h2V2h-2v20Zm-4-4h2V6H7v12Zm-2-4H3v-4h2v4Zm10 4h2V6h-2v12Zm4-4v-4h2v4h-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
