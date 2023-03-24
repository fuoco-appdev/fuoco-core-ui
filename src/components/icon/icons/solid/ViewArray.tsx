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
      d="M4 18h3V5H4v13ZM18 5v13h3V5h-3Zm-1 13H8V5h9v13Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
