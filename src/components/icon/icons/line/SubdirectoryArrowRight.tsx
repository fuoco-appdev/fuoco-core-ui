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
    <path d="m19.5 14.5-6 6-1.42-1.42 3.59-3.58H4.5v-12h2v10h9.17l-3.59-3.58L13.5 8.5l6 6Z" />
  </svg>
)

export default Icon
