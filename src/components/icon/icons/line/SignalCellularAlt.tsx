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
    <path d="M16.5 4h3v16h-3V4Zm-12 10h3v6h-3v-6Zm6-5h3v11h-3V9Z" />
  </svg>
);

export default Icon;
