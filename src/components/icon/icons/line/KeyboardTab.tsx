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
    <path d="M12.09 7.41 15.67 11H1.5v2h14.17l-3.59 3.59L13.5 18l6-6-6-6-1.41 1.41ZM20.5 6v12h2V6h-2Z" />
  </svg>
)

export default Icon
