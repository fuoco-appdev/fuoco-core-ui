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
    <path d="M9.5 11.995c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm4.25-2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1Zm-3.5 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1Zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1ZM22 11.245v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75h-1.54a6.978 6.978 0 0 1-1.52 3.65l1.09 1.09.01-.01c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.06 1.06c-.29.29-.77.29-1.06 0a.752.752 0 0 1-.01-1.05l-1.09-1.09a7.015 7.015 0 0 1-3.64 1.51v1.54h.01c.41 0 .75.34.75.75s-.34.75-.75.75h-1.5c-.41 0-.75-.34-.75-.75s.33-.74.74-.75v-1.55a6.948 6.948 0 0 1-3.63-1.51l-1.09 1.09.01.01c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-1.07-1.07a.754.754 0 0 1 0-1.06c.29-.29.76-.29 1.05-.01l1.09-1.09a6.89 6.89 0 0 1-1.5-3.63H3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75h1.54c.15-1.37.69-2.61 1.5-3.63l-1.09-1.09c-.29.28-.76.28-1.05-.01a.754.754 0 0 1 0-1.06l1.06-1.06c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.01.01 1.09 1.09a6.982 6.982 0 0 1 3.63-1.51v-1.55a.753.753 0 0 1-.74-.75.77.77 0 0 1 .76-.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75h-.01v1.54c1.37.14 2.62.69 3.64 1.51l1.09-1.09a.742.742 0 0 1 .01-1.05c.29-.29.77-.29 1.06 0l1.06 1.06c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-.01-.01-1.09 1.08a7.025 7.025 0 0 1 1.52 3.65h1.54c0-.41.34-.75.75-.75s.75.34.75.75Zm-5 .75c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5Zm-5-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm3.5 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm-1.75 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z" />
  </svg>
)

export default Icon
