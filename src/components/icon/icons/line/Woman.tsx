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
    <path d="M13.94 8.31A2.098 2.098 0 0 0 12 7c-.85 0-1.62.52-1.94 1.31L7 16h3v6h4v-6h3l-3.06-7.69Z" />
    <path d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);

export default Icon;
