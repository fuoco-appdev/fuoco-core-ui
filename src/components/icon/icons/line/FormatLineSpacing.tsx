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
    <path d="M6.25 7h2.5l-3.5-3.5L1.75 7h2.5v10h-2.5l3.5 3.5 3.5-3.5h-2.5V7Zm4-2v2h12V5h-12Zm0 14h12v-2h-12v2Zm0-6h12v-2h-12v2Z" />
  </svg>
)

export default Icon
