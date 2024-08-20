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
    <path d="M22 2v2H2V2h20ZM7 10.5v3h10v-3H7ZM2 20v2h20v-2H2Z" />
  </svg>
)

export default Icon
