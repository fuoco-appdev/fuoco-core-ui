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
    <path d="M8.485 4.295h10.17v10.17l1.83 1.83h2.17v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2c0-1.1-.9-2-2-2H6.485l2 2Zm4.17 4.17v-2.17h4v3h-3.17l-.83-.83Zm-2.17-2.17h1.17v1.17l-1.17-1.17Zm4 4h2.17v2.17l-2.17-2.17Zm4.17 10c.06 0 .11 0 .16-.01l2.32 2.32 1.41-1.41-19.79-19.8-1.41 1.41 1.32 1.32c-.01.06-.01.11-.01.17v14c0 1.1.9 2 2 2h14Zm-14-2V6.125l2 2v3.17h3.17l1 1h-4.17v4h5v-3.17l1 1v2.17h2.17l2 2H4.655Z" />
  </svg>
)

export default Icon
