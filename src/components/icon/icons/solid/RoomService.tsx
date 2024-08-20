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
      d="M14 7c0 .28-.06.55-.16.79 3.91.81 6.89 4.14 7.16 8.21H3c.27-4.07 3.25-7.4 7.16-8.21A2.006 2.006 0 0 1 12 5c1.1 0 2 .9 2 2Zm8 12v-2H2v2h20Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
