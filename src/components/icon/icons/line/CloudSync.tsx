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
    <path d="M19.5 14.98c-.02 0-.03 0-.05.01A3.49 3.49 0 0 0 16 12c-1.4 0-2.6.83-3.16 2.02A2.988 2.988 0 0 0 10 17c0 1.66 1.34 3 3 3l6.5-.02a2.5 2.5 0 0 0 0-5Zm.01 3.02H13c-.55 0-1-.45-1-1s.45-1 1-1h1.25v-.25c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75V17h1.76c.28 0 .5.22.5.5-.01.27-.23.5-.5.5ZM8 4.26v2.09C5.67 7.18 4 9.39 4 12c0 1.77.78 3.34 2 4.44V14h2v6H2v-2h2.73A7.942 7.942 0 0 1 2 12c0-3.73 2.55-6.85 6-7.74ZM18 6h-2.73a7.98 7.98 0 0 1 2.66 5h-2.02c-.23-1.36-.93-2.55-1.91-3.44V10h-2V4h6v2Z" />
  </svg>
)

export default Icon
