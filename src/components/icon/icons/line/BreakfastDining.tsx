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
    <path d="M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45 0-2.21-1.79-4-4-4Zm1 5.72-1 .58V19H6V9.31l-.99-.58C4.38 8.35 4 7.71 4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2 0 .71-.38 1.36-1 1.72Z" />
    <path d="M12.71 9.29C12.51 9.1 12.26 9 12 9c-.26 0-.51.1-.71.29l-3 3a.996.996 0 0 0 0 1.41l3 3c.2.2.45.3.71.3.26 0 .51-.1.71-.29l3-3a.996.996 0 0 0 0-1.41l-3-3.01ZM12 14.58 10.41 13 12 11.41 13.59 13 12 14.58Z" />
  </svg>
)

export default Icon
