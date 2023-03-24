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
    <path d="m12 8.615 4.59 4.59 1.41-1.41-6-6-6 6 1.41 1.41L12 8.615Zm-6 9.59h12v-2H6v2Z" />
  </svg>
);

export default Icon;
