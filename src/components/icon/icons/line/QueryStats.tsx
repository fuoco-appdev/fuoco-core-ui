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
    <path d="M19.88 17.97c.44-.7.7-1.51.7-2.39 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5 2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7l3.12 3.12L23 21.08l-3.12-3.11Zm-3.8.11a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Zm-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83-3.8 6.18-3.01-3.52-3.63 5.81L1 16.5l5-8L9 12l4-6.5 2.72 4.08Zm2.59.5c-.64-.28-1.33-.45-2.05-.49l5.12-8.09L23 2.68l-4.69 7.4Z" />
  </svg>
)

export default Icon
