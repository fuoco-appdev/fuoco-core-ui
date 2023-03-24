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
      d="M4 8h4V4H4v4Zm6 12h4v-4h-4v4Zm-2 0H4v-4h4v4Zm-4-6h4v-4H4v4Zm10 0h-4v-4h4v4Zm2-10v4h4V4h-4Zm-2 4h-4V4h4v4Zm2 6h4v-4h-4v4Zm4 6h-4v-4h4v4Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
