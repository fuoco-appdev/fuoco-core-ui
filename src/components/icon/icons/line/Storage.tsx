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
    <path d="M2 20h20v-4H2v4Zm2-3h2v2H4v-2ZM2 4v4h20V4H2Zm4 3H4V5h2v2Zm-4 7h20v-4H2v4Zm2-3h2v2H4v-2Z" />
  </svg>
)

export default Icon
