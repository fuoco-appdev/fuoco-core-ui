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
      d="m21 19-2-1V5c0-1.1-.9-2-2-2H7c0-1.1.89-2 1.99-2H19c1.1 0 2 .9 2 2v16ZM5 5h10c1.1 0 2 .9 2 2v16l-7-3-7 3V7c0-1.1.9-2 2-2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
