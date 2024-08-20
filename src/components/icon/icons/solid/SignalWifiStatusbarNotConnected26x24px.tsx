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
    <path d="M14.77 13.438c0-2.646 2.067-4.792 4.615-4.792.784 0 1.513.22 2.16.584l2.067-2.673c-.443-.345-4.91-4.14-11.612-4.14S.83 6.212.388 6.557L12 21.583l3.895-5.04a4.855 4.855 0 0 1-1.126-3.105Z" />
    <path d="M19.385 10.083c-1.782 0-3.231 1.505-3.231 3.354h1.615c0-.93.72-1.677 1.616-1.677.895 0 1.615.748 1.615 1.678 0 .46-.185.881-.47 1.188l-1.007 1.054a3.413 3.413 0 0 0-.942 2.367v.422h1.616c0-1.256.36-1.764.95-2.367l.72-.767c.462-.48.758-1.15.758-1.888-.01-1.86-1.459-3.364-3.24-3.364Z" />
    <path d="M18.508 21.535h1.754v-1.82h-1.754v1.82Z" />
  </svg>
)

export default Icon
