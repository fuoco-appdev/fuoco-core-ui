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
    <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2ZM7 4V3h10v1H7Zm0 14V6h10v12H7Zm0 3v-1h10v1H7Z" />
    <path d="M16 7H8v2h8V7Z" />
  </svg>
);

export default Icon;
