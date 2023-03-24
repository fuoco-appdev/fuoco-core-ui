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
    <path d="M15 15H3v2h12v-2Zm0-8H3v2h12V7ZM3 13h18v-2H3v2Zm0 8h18v-2H3v2ZM3 3v2h18V3H3Z" />
  </svg>
);

export default Icon;
