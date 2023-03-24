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
      d="M10.18 12 5.59 7.41 7 6l6 6-6 6-1.41-1.41L10.18 12ZM18 6h-2v12h2V6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
