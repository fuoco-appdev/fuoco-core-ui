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
      d="M4 4h6L7.71 6.29l5.29 5.3V20h-2v-7.59l-4.71-4.7L4 10V4Zm12.29 2.29L14 4h6v6l-2.29-2.29-2.88 2.88-1.42-1.42 2.88-2.88Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
