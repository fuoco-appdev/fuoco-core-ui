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
      d="m16 4 6 6v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.89-2-1.99V6c0-1.1.9-2 2-2h12Zm4.5 7L15 5.5V11h5.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
