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
    <path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6Z" />
  </svg>
)

export default Icon
