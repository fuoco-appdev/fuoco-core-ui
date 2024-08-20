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
    <path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18Zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4Zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18Zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4Z" />
  </svg>
)

export default Icon
