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
    <path d="M12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M10 3h4v12h-4V3Z" />
  </svg>
);

export default Icon;
