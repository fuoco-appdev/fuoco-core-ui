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
      d="m9 17-3 3-3-3h2V4h2v13h2Zm6.75-12h-1.5L9.5 16h2.1l.9-2.2h5l.9 2.2h2.1L15.75 5Zm-2.62 7L15 6.98 16.87 12h-3.74Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
