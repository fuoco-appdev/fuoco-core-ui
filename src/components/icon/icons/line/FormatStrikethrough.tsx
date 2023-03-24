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
    <path d="M10 19.5h4v-3h-4v3Zm-5-15v3h5v3h4v-3h5v-3H5Zm-2 10h18v-2H3v2Z" />
  </svg>
);

export default Icon;
