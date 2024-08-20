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
      d="M21.18 14.79a1.51 1.51 0 0 1-1.84 1.06L2.77 11.41V6.24l1.45.39.93 2.32 4.97 1.33V2l1.93.51 2.76 9.02 5.31 1.42c.8.22 1.27 1.04 1.06 1.84ZM21.5 19h-19v2h19v-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
