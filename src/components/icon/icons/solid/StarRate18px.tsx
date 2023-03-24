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
    <path d="m12 15.067 4.947 3.6-1.894-5.814L20 9.333h-6.067l-1.933-6-1.933 6H4l4.947 3.52-1.894 5.814 4.947-3.6Z" />
  </svg>
);

export default Icon;
