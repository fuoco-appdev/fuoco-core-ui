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
    <path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3Z" />
  </svg>
)

export default Icon
