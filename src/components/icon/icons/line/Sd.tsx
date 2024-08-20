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
    <path d="M7 15h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H7.5v-1h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2V13H6v1c0 .55.45 1 1 1Z" />
    <path d="M18 14v-4c0-.55-.45-1-1-1h-4v6h4c.55 0 1-.45 1-1Zm-1.5-.5h-2v-3h2v3Z" />
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 14H4V6h16v12Z" />
  </svg>
)

export default Icon
