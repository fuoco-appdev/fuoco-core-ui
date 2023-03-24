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
      d="M17 4h3v16h-3V4ZM5 14h3v6H5v-6Zm9-5h-3v11h3V9Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
