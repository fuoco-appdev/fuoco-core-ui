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
    <path d="m13.5 5.5-1-2h-8v17h2v-7h5l1 2h7v-10h-6Zm4 8h-4l-1-2h-6v-6h5l1 2h5v6Z" />
  </svg>
)

export default Icon
