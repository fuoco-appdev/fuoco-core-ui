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
    <path d="M17.885 3.77 16.115 2l-10 10 10 10 1.77-1.77L9.655 12l8.23-8.23Z" />
  </svg>
);

export default Icon;
