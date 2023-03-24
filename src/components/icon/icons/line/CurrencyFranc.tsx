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
    <path d="M18.5 5V3h-11v13h-2v2h2v3h2v-3h4v-2h-4v-3h8v-2h-8V5h9Z" />
  </svg>
);

export default Icon;
