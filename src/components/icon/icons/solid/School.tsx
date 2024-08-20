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
      d="m1 9 11-6 11 6v8h-2v-6.91L12 15 1 9Zm4 8.18v-4L12 17l7-3.82v4L12 21l-7-3.82Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
