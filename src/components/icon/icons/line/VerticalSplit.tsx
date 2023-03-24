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
    <path d="M3 13h8v2H3v-2Zm0 4h8v2H3v-2Zm0-8h8v2H3V9Zm0-4h8v2H3V5Zm16 2v10h-4V7h4Zm2-2h-8v14h8V5Z" />
  </svg>
);

export default Icon;
