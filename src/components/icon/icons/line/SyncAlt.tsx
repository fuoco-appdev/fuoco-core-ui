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
    <path d="M7.41 13.41 6 12l-4 4 4 4 1.41-1.41L5.83 17H21v-2H5.83l1.58-1.59Z" />
    <path d="M16.59 10.59 18 12l4-4-4-4-1.41 1.41L18.17 7H3v2h15.17l-1.58 1.59Z" />
  </svg>
);

export default Icon;
