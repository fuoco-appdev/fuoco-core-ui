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
    <path d="m17.27 6.73-4.24 10.13-1.64-4.25-.82-.32-3.43-1.33 10.13-4.23ZM21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3Z" />
  </svg>
)

export default Icon
