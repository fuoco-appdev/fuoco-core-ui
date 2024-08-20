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
    <path d="M2.5 4.5v3h5v12h3v-12h5v-3h-13Zm19 5h-9v3h3v7h3v-7h3v-3Z" />
  </svg>
)

export default Icon
