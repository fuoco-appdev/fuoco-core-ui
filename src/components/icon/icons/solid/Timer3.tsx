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
      d="M10.99 12.32c.26.19.46.41.62.65.16.25.27.51.35.76.07.28.11.57.11.86 0 .55-.1 1.05-.3 1.48-.2.44-.48.8-.84 1.1-.35.3-.77.53-1.26.68-.49.15-1.01.23-1.58.23-.52 0-1.01-.07-1.48-.21-.47-.14-.88-.35-1.24-.63s-.65-.63-.86-1.05c-.21-.42-.32-.9-.32-1.45h1.99c0 .26.05.5.14.72.09.22.22.4.39.56.17.16.37.28.61.36.24.09.51.13.8.13.61 0 1.1-.16 1.45-.49.35-.33.53-.8.53-1.42 0-.33-.06-.63-.16-.87-.1-.25-.25-.45-.44-.61-.19-.16-.42-.27-.69-.35-.27-.07-.57-.11-.91-.11H6.72v-1.57h1.17c.34 0 .64-.04.89-.13s.46-.21.63-.37c.17-.16.3-.35.38-.57.08-.22.12-.47.12-.74 0-.57-.14-1.01-.44-1.32-.3-.31-.75-.47-1.36-.47-.27 0-.51.04-.73.12-.22.08-.41.19-.58.33-.16.14-.29.32-.38.52-.09.2-.14.43-.14.69H4.3c0-.46.09-.9.29-1.29.18-.4.45-.74.78-1.03.33-.29.73-.52 1.2-.69.46-.16.97-.24 1.52-.24.56 0 1.08.07 1.53.2.47.14.87.36 1.2.64.34.29.6.64.78 1.06.19.42.28.91.28 1.46 0 .24-.03.49-.11.73-.07.25-.19.48-.34.71-.15.23-.34.44-.57.64-.23.2-.5.36-.8.5.37.13.68.29.93.48Zm9.25 1.31c.28.21.49.46.63.74.15.28.22.62.24 1.02 0 .39-.08.74-.25 1.06-.17.32-.4.6-.71.83-.31.23-.68.41-1.11.54-.43.13-.91.19-1.44.19-.6 0-1.12-.08-1.58-.25-.46-.17-.84-.39-1.15-.66-.31-.28-.54-.59-.7-.93a2.44 2.44 0 0 1-.24-1.05h1.89a1.335 1.335 0 0 0 .59 1.11c.16.11.35.19.56.24.21.06.42.08.64.08.51 0 .9-.09 1.17-.29.27-.2.4-.45.4-.77 0-.14-.02-.27-.07-.39a.849.849 0 0 0-.27-.34 2.5 2.5 0 0 0-.57-.29 6.5 6.5 0 0 0-.95-.26c-.46-.1-.89-.22-1.27-.36a3.95 3.95 0 0 1-.98-.53 2.33 2.33 0 0 1-.64-.73c-.15-.28-.23-.6-.23-.96s.07-.69.23-1.01c.16-.32.38-.6.67-.84.29-.24.65-.43 1.06-.57.41-.14.88-.21 1.39-.21.54 0 1.03.07 1.46.22.43.15.79.34 1.09.59a2.516 2.516 0 0 1 .93 1.97h-1.95c0-.17-.04-.33-.1-.49-.07-.16-.16-.3-.29-.42-.13-.12-.29-.22-.48-.29a1.9 1.9 0 0 0-.66-.11c-.24 0-.46.03-.64.09s-.33.14-.45.24a.945.945 0 0 0-.36.75c0 .15.03.28.08.39.05.11.14.21.28.3s.32.17.55.25c.23.08.52.16.87.23.5.11.95.24 1.35.38.4.14.73.32 1.01.53Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
