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
    <path d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3Z" />
  </svg>
);

export default Icon;
