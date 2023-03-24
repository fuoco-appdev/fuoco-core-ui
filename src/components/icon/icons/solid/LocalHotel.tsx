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
      d="M11 7h8c2.21 0 4 1.79 4 4v9h-2v-3H3v3H1V5h2v9h8V7Zm-1 3c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
