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
    <path d="m6 18 8.5-6L6 6v12Zm2-8.14L11.03 12 8 14.14V9.86ZM16 6h2v12h-2V6Z" />
  </svg>
)

export default Icon
