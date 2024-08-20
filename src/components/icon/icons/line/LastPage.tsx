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
    <path d="m5.795 7.41 4.59 4.59-4.59 4.59L7.205 18l6-6-6-6-1.41 1.41ZM16.205 6h2v12h-2V6Z" />
  </svg>
)

export default Icon
