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
    <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6Z" />
  </svg>
);

export default Icon;
