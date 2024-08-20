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
    <path d="M12 3 2 21h20L12 3Zm1 5.92L18.6 19H13V8.92Zm-2 0V19H5.4L11 8.92Z" />
  </svg>
)

export default Icon
