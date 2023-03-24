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
      d="M4 5V3h16v2H4Zm7 6H8l4-4 4 4h-3v10h-2V11Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
