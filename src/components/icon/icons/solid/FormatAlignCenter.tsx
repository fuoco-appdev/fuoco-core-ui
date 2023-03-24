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
      d="M3 5V3h18v2H3Zm4 2v2h10V7H7Zm14 6H3v-2h18v2ZM7 15v2h10v-2H7Zm-4 6h18v-2H3v2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
