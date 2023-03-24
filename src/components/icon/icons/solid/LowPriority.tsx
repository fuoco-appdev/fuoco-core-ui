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
      d="M8.5 18C4.92 18 2 15.08 2 11.5S4.92 5 8.5 5H12v2H8.5C6.02 7 4 9.02 4 11.5S6.02 16 8.5 16H9v-2l3 3-3 3v-2h-.5ZM22 5h-8v2h8V5Zm0 5.5h-8v2h8v-2ZM14 16h8v2h-8v-2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
