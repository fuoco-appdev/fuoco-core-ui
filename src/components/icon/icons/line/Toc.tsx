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
    <path d="M3 9h14V7H3v2Zm0 4h14v-2H3v2Zm0 4h14v-2H3v2Zm16 0h2v-2h-2v2Zm0-10v2h2V7h-2Zm0 6h2v-2h-2v2Z" />
  </svg>
)

export default Icon
