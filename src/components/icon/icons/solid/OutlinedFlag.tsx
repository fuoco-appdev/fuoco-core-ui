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
      d="m13 4 1 2h6v10h-7l-1-2H7v7H5V4h8Zm1 10h4V8h-5l-1-2H7v6h6l1 2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
