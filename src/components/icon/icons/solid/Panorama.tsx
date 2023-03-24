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
      d="M23 6v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2Zm-12 9.51L8.5 12.5 5 17h14l-4.5-6-3.5 4.51Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
