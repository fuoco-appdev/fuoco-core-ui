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
    <path d="M3 9.5H1v11c0 1.11.89 2 2 2h16v-2H3v-11Z" />
    <path d="M18 5.5v-2c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-11h-5Zm-6-2h4v2h-4v-2Zm9 13H7v-9h14v9Z" />
    <path d="M12 8.5v7l5.5-3.5L12 8.5Z" />
  </svg>
)

export default Icon
