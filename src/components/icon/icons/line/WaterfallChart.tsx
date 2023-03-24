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
    <path d="M18 4h3v16h-3V4ZM3 13h3v7H3v-7Zm11-9h3v3h-3V4Zm-4 1h3v4h-3V5Zm-3 5h3v4H7v-4Z" />
  </svg>
);

export default Icon;
