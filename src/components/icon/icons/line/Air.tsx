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
    <path d="M14.5 17.5c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3ZM19 7c0-1.93-1.57-3.5-3.5-3.5S12 5.07 12 7h2c0-.83.67-1.5 1.5-1.5S17 6.17 17 7s-.67 1.5-1.5 1.5H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5Zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5Z" />
  </svg>
)

export default Icon
