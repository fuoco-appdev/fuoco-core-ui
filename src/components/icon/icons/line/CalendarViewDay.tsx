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
    <path d="M3 16.5h18v2H3v-2Zm16-5v1H5v-1h14Zm2-2H3v5h18v-5Zm-18-4h18v2H3v-2Z" />
  </svg>
);

export default Icon;
