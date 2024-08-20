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
    <path d="m7.075 10.065-1.41-1.42c-.9 1.16-1.46 2.5-1.63 3.89h2.02c.14-.87.49-1.72 1.02-2.47Zm-1.02 4.47h-2.02c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47Zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61v-2.03c-.87-.15-1.71-.49-2.46-1.03l-1.44 1.45Zm5.9-14.25v-3.07l-4.55 4.55 4.55 4.45v-3.91c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93Z" />
  </svg>
)

export default Icon
