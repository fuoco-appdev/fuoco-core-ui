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
      d="M2 6h12v2H2V6Zm0 4h12v2H2v-2Zm0 6h8v-2H2v2Zm21-3-1.5-1.5-5.49 5.5L13 14l-1.5 1.5 4.51 4.5L23 13Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
