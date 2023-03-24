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
      d="M2 20 12 4l10 16H2Zm16.39-2L12 7.77 5.61 18h12.78Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
