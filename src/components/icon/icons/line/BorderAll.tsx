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
    <path d="M3 3v18h18V3H3Zm8 16H5v-6h6v6Zm0-8H5V5h6v6Zm8 8h-6v-6h6v6Zm0-8h-6V5h6v6Z" />
  </svg>
);

export default Icon;
