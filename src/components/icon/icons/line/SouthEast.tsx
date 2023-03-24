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
    <path d="M19.5 9.5h-2v6.59L5.91 4.5 4.5 5.91 16.09 17.5H9.5v2h10v-10Z" />
  </svg>
);

export default Icon;
