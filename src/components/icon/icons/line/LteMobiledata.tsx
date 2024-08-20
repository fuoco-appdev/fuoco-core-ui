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
    <path d="M5.5 14h3v2h-5V8h2v6Zm3-4h2v6h2v-6h2V8h-6v2Zm12 0V8h-5v8h5v-2h-3v-1h3v-2h-3v-1h3Z" />
  </svg>
)

export default Icon
