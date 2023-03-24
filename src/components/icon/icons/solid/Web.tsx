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
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2Zm10.5 5H4v3.5h10.5V9ZM4 14.5h10.5V18H4v-3.5ZM16.5 18H20V9h-3.5v9Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
