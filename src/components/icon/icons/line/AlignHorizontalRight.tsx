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
    <path d="M20 2h2v20h-2V2ZM2 10h16V7H2v3Zm6 7h10v-3H8v3Z" />
  </svg>
)

export default Icon
