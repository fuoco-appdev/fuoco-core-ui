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
      d="M8 17H5l2-4H4V7h6v6l-2 4Zm10 0h-3l2-4h-3V7h6v6l-2 4Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
