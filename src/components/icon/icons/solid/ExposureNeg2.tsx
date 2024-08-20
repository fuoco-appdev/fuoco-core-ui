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
      d="m17.91 13.22-2.86 3.07H21V18h-8.63v-1.49l4.17-4.55c.36-.38.65-.73.88-1.03.24-.3.42-.58.56-.83.14-.25.23-.48.29-.7.05-.22.08-.43.08-.65 0-.29-.05-.56-.13-.81a1.97 1.97 0 0 0-.37-.65c-.16-.18-.36-.33-.59-.43-.23-.1-.5-.15-.81-.15-.36 0-.69.06-.96.18s-.5.28-.68.49c-.17.21-.31.46-.4.75-.08.27-.12.56-.13.87h-2.14c.01-.53.1-1.03.28-1.5.19-.5.47-.93.84-1.3.36-.37.82-.67 1.36-.88.54-.21 1.16-.32 1.85-.32.64 0 1.21.08 1.72.24.49.17.92.4 1.26.71.34.3.6.67.78 1.11.18.44.27.93.27 1.46 0 .39-.06.79-.19 1.18-.13.39-.31.78-.54 1.17-.23.39-.5.78-.82 1.17-.32.39-.66.79-1.04 1.18ZM2 13v-2h8v2H2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
