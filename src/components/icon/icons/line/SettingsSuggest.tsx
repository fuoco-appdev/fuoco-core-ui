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
    <path d="M9.59 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Zm8.5-2 1.09-2.41 2.41-1.09-2.41-1.09L18.09 2 17 4.41 14.59 5.5 17 6.59 18.09 9Zm2.78 3.72L20.09 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72 1.72-.78-1.72-.78ZM15.84 14c0-.12 0-.25-.01-.37l1.94-1.47-2.5-4.33-2.24.94c-.2-.13-.42-.26-.64-.37l-.3-2.4h-5l-.3 2.41c-.22.11-.43.24-.64.37l-2.24-.95-2.5 4.33 1.94 1.47c-.01.12-.01.25-.01.37s0 .25.01.37l-1.94 1.47 2.5 4.33 2.24-.94c.2.13.42.26.64.37l.3 2.4h5l.3-2.41c.22-.11.43-.23.64-.37l2.24.94 2.5-4.33-1.94-1.47c.01-.11.01-.24.01-.36Zm-1.42 3.64-1.73-.73c-.56.6-1.3 1.04-2.13 1.23L10.32 20H8.86l-.23-1.86c-.83-.19-1.57-.63-2.13-1.23l-1.73.73-.73-1.27 1.49-1.13c-.12-.39-.18-.8-.18-1.23 0-.43.06-.84.18-1.23l-1.49-1.13.73-1.27 1.73.73c.56-.6 1.3-1.04 2.13-1.23L8.86 8h1.47l.23 1.86c.83.19 1.57.63 2.13 1.23l1.73-.73.73 1.27-1.49 1.13c.12.39.18.8.18 1.23 0 .43-.06.84-.18 1.23l1.49 1.13-.73 1.29Z" />
  </svg>
)

export default Icon
