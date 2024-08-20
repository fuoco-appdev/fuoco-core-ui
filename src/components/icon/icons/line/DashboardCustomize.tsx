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
    <path d="M3 11h8V3H3v8Zm2-6h4v4H5V5Z" />
    <path d="M13 3v8h8V3h-8Zm6 6h-4V5h4v4Z" />
    <path d="M3 21h8v-8H3v8Zm2-6h4v4H5v-4Z" />
    <path d="M18 13h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3Z" />
  </svg>
)

export default Icon
