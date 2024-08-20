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
    <path
      fillRule="evenodd"
      d="M2 12C2 6.48 6.47 2 11.99 2 17.52 2 22 6.48 22 12s-4.48 10-10.01 10C6.47 22 2 17.52 2 12Zm10 3.45L16.23 18l-1.12-4.82 3.73-3.23-4.92-.42L12 5l-1.92 4.54-4.92.42 3.73 3.23L7.77 18 12 15.45Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
