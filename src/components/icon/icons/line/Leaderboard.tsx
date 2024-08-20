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
    <path d="M16 11V3H8v6H2v12h20V11h-6Zm-6-6h4v14h-4V5Zm-6 6h4v8H4v-8Zm16 8h-4v-6h4v6Z" />
  </svg>
)

export default Icon
