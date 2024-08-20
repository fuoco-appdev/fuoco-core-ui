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
    <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3ZM9 3 5 6.99h3V14h2V6.99h3L9 3Zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3ZM9 3 5 6.99h3V14h2V6.99h3L9 3Z" />
  </svg>
)

export default Icon
