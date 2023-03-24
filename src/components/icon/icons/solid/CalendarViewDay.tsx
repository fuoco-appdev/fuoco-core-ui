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
      d="M21 6H3v2h18V6ZM3 10h18v5H3v-5Zm0 7h18v2H3v-2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
