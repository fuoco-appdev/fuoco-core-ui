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
    <path d="M21.943 4.88a1.32 1.32 0 0 0-1.26-.88h-1.08l-.31-.97c-.14-.6-.68-1.03-1.29-1.03s-1.15.43-1.29 1.04l-.31.96h-1.07c-.57 0-1.08.35-1.26.88-.19.56.04 1.17.56 1.48l.87.52-.4 1.24c-.23.58-.04 1.25.45 1.62.23.17.51.26.78.26.31 0 .61-.11.86-.32l.81-.7.81.7c.25.21.55.32.86.32.27 0 .55-.09.78-.26.5-.37.68-1.04.45-1.62l-.39-1.24.87-.52c.51-.31.74-.92.56-1.48ZM18.003 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z" />
    <path d="M13.493 10.51c-.43-.43-.94-.73-1.49-.93V8h-1v1.38c-.11-.01-.23-.03-.34-.03-1.02 0-2.05.39-2.83 1.17l-.5.5-1.33-.5a3.01 3.01 0 0 0-3.83 1.82c-.27.75-.23 1.57.12 2.29.23.48.58.87 1 1.16-.38 1.35-.06 2.85 1 3.91.78.78 1.8 1.17 2.83 1.17.37 0 .73-.07 1.09-.17.29.42.68.77 1.16 1 .41.2.84.3 1.28.3.34 0 .68-.06 1.01-.17a3.007 3.007 0 0 0 1.82-3.85l-.49-1.3.5-.5c.87-.87 1.24-2.04 1.14-3.17h1.37v-1h-1.59c-.19-.55-.49-1.06-.92-1.5Zm-5.91 8.31c-.15.04-.3.06-.46.06-.53 0-1.04-.21-1.41-.59-.38-.38-.59-.88-.59-1.41 0-.16.03-.32.06-.47.14.01.28.03.42.03.85 0 1.68-.2 2.44-.48-.32.89-.54 1.87-.46 2.86Zm-2.91-4.53a1.02 1.02 0 0 1-.57-.51.958.958 0 0 1-.04-.76c.19-.52.76-.79 1.26-.61l3.16 1.19c-1.15.6-2.63 1.11-3.81.69Zm6.32 5.65c-.25.09-.52.08-.76-.04a.989.989 0 0 1-.51-.57c-.42-1.18.09-2.65.7-3.8l1.18 3.13c.18.52-.09 1.1-.61 1.28Zm1.21-5.34-.61-1.61c0-.01-.01-.02-.02-.03l-.06-.12a.673.673 0 0 0-.07-.11l-.09-.09-.09-.09a.413.413 0 0 0-.11-.07c-.04-.02-.07-.05-.12-.06-.01 0-.02-.01-.03-.02l-1.6-.6a1.966 1.966 0 0 1 2.67.13c.73.73.77 1.88.13 2.67Z" />
  </svg>
)

export default Icon
