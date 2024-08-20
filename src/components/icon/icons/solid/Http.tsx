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
      d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2Zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5Zm7 0h-1.5V9H17v1.5h-1.5V15H14v-4.5ZM21.5 9H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5Zm-2 2.5h2v-1h-2v1Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
