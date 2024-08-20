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
    <path d="M22 9 12 2 2 9h9v13h2V9h9ZM12 4.44 15.66 7H8.34L12 4.44Z" />
    <path d="m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9l-.76-4Z" />
    <path d="M19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37-.76 4Z" />
  </svg>
)

export default Icon
