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
    <path d="M18.932 8c-2.21-3.82-7.11-5.13-10.93-2.93-1.41.82-2.48 2-3.16 3.37-.13-2.2.22-4.4 1.02-6.44h-2.12c-1.54 4.49-1.22 9.58 1.33 14a7.96 7.96 0 0 0 4.86 3.72c1.98.53 4.16.31 6.07-.79 1.41-.82 2.48-2 3.16-3.37.13 2.2-.21 4.4-1.01 6.44h2.11c1.53-4.49 1.22-9.58-1.33-14Zm-3.93 9.2a6.012 6.012 0 0 1-8.2-2.2c-.11-.2-.21-.4-.3-.6-1.2-2.76-.17-6.06 2.5-7.6 2.86-1.65 6.54-.67 8.2 2.2.11.2.21.4.3.6 1.2 2.76.17 6.06-2.5 7.6Zm-3-7.2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Z" />
  </svg>
)

export default Icon
