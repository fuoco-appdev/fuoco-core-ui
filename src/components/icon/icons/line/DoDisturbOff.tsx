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
    <path d="M12.5 3.5c4.41 0 8 3.59 8 8 0 1.41-.37 2.73-1.01 3.88l1.46 1.46a9.96 9.96 0 0 0 1.55-5.34c0-5.52-4.48-10-10-10a9.9 9.9 0 0 0-5.33 1.55l1.46 1.46A7.883 7.883 0 0 1 12.5 3.5Zm5 7h-2.88l2 2h.88v-2ZM2.91 1.63 1.5 3.04l2.78 2.78A9.92 9.92 0 0 0 2.5 11.5c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78l2.78 2.78 1.41-1.41L2.91 1.63ZM12.5 19.5c-4.41 0-8-3.59-8-8 0-1.56.45-3 1.23-4.23l3.23 3.23H7.5v2h3.46l5.77 5.77a7.846 7.846 0 0 1-4.23 1.23Z" />
  </svg>
)

export default Icon
