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
    <path d="M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41Z" />
  </svg>
);

export default Icon;
