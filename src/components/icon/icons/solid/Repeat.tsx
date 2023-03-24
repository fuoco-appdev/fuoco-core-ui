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
      d="M17 7H7v4H5V5h12V2l4 4-4 4V7ZM7 17h10v-4h2v6H7v3l-4-4 4-4v3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
