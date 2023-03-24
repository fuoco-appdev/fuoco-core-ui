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
      d="M16.59 13 12 8.41 7.41 13 6 11.59l6-6 6 6L16.59 13ZM18 16v2H6v-2h12Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
