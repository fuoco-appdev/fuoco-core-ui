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
      d="m14.5 3 1 1H19v2H5V4h3.5l1-1h5ZM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12Zm6-9 4 4h-2v4h-4v-4H8l4-4Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
