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
    <path d="M12.01 21.24 23.64 6.75c-.45-.34-4.93-4-11.64-4-6.72 0-11.19 3.66-11.64 4l11.63 14.49.01.01.01-.01Z" />
  </svg>
)

export default Icon
