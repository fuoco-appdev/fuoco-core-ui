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
      d="M20 4H4v2h16V4Zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1ZM6 18h6v-4H6v4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
