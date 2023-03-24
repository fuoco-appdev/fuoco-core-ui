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
      d="M5 15V9h4l5-5v16l-5-5H5Zm11-7.03A4.5 4.5 0 0 1 18.5 12c0 1.77-1.02 3.29-2.5 4.02V7.97Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
