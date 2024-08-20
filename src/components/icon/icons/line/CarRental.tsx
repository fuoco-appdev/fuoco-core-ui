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
    <path d="M9 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M15 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M17.25 10.1c-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4-.22.66-.74 2.22-1.56 4.69v6.5c0 .45.35.81.78.81h.44c.43 0 .78-.36.78-.81V20.5h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5c-.82-2.46-1.34-4.03-1.56-4.69-.05-.16-.12-.29-.19-.4Zm-8.92 1.4h7.34l.23.69.43 1.31H7.67l.66-2Zm8.67 7H7v-3h10v3Z" />
    <path d="M10.83 3.5A3.01 3.01 0 0 0 8 1.5c-1.66 0-3 1.34-3 3 0 1.65 1.34 3 3 3 1.3 0 2.41-.84 2.83-2H16v2h2v-2h1v-2h-8.17ZM8 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z" />
  </svg>
)

export default Icon
