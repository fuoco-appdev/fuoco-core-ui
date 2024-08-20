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
    <path d="M17.34 18H5.8l8.25-12h5.54l-2.25 12ZM13 4 2 20h17l3-16h-9Zm1.5 5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5Z" />
  </svg>
)

export default Icon
