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
    <path d="M20 20H4v2h16v-2Z" />
    <path d="M20 2H4v2h16V2Z" />
    <path d="M9.41 13.59 8 15l4 4 4-4-1.41-1.41L13 15.17V8.83l1.59 1.58L16 9l-4-4-4 4 1.41 1.41L11 8.83v6.34l-1.59-1.58Z" />
  </svg>
)

export default Icon
