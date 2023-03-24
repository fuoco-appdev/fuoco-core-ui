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
    <path d="M19 15v2H5v-2h14Zm2-10H3v2h18V5Zm0 4H3v2h18V9Zm0 4H3v6h18v-6Z" />
  </svg>
);

export default Icon;
