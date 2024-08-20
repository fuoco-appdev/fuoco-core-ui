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
    <path d="M.995 19h2.42l1.27-3.58h5.65l1.26 3.58h2.42L8.755 5h-2.5L.995 19Zm4.42-5.61 2.03-5.79h.12l2.03 5.79h-4.18ZM20.005 11h3v2h-3v3h-2v-3h-3v-2h3V8h2v3Z" />
  </svg>
)

export default Icon
