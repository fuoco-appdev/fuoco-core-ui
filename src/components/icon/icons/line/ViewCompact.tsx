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
    <path d="M2.5 5v14h19V5h-19Zm2 2h15v4h-15V7Zm0 10v-4h4v4h-4Zm6 0v-4h9v4h-9Z" />
  </svg>
)

export default Icon
