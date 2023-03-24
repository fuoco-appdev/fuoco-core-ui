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
      d="M7 9H3V5h4v4Zm0 5H3v-4h4v4Zm1 0h4v-4H8v4Zm9 0h-4v-4h4v4ZM8 9h4V5H8v4Zm5 0V5h4v4h-4Zm5 5h4v-4h-4v4ZM7 19H3v-4h4v4Zm1 0h4v-4H8v4Zm9 0h-4v-4h4v4Zm1 0h4v-4h-4v4Zm0-10V5h4v4h-4Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
