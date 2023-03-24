import * as React from "react";

const Icon = ({ size = 46, color = "currentColor", ...props }) => (
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
      d="M15.5 3.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2ZM7 23 9.8 8.9 8 9.6V13H6V8.3l5.05-2.14c.97-.41 2.09-.05 2.65.84l1 1.6C15.5 10 17.1 11 19 11v2c-2.2 0-4.2-1-5.5-2.5l-.6 3 2.1 2V23h-2v-6l-2.1-2-1.8 8H7Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
