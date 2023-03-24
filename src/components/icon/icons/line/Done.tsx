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
    <path d="m8.8 15.9-4.2-4.2-1.4 1.4 5.6 5.6 12-12-1.4-1.4L8.8 15.9Z" />
  </svg>
);

export default Icon;
