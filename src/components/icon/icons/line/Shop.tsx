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
    <path d="M16 6.5v-2c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-13h-6Zm-6-2h4v2h-4v-2Zm10 15H4v-11h16v11Zm-11-1 7.5-5-7.5-4v9Z" />
  </svg>
);

export default Icon;
