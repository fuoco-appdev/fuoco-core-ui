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
    <path d="m5 14.795 1.41 1.41 5.59-5.58 5.59 5.58 1.41-1.41-7-7-7 7Z" />
  </svg>
);

export default Icon;
