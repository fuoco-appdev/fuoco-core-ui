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
    <path d="M18.205 16.59 13.615 12l4.59-4.59L16.795 6l-6 6 6 6 1.41-1.41ZM5.795 6h2v12h-2V6Z" />
  </svg>
)

export default Icon
