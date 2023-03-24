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
      d="M14 21V6h3v15h4v-2h-2V4h-5V3H5v16H3v2h11Zm-4-8v-2h2v2h-2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
