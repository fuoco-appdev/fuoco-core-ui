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
    <path d="M4 15h16v-2H4v2Zm0 4h16v-2H4v2Zm0-8h16V9H4v2Zm0-6v2h16V5H4Z" />
  </svg>
);

export default Icon;
