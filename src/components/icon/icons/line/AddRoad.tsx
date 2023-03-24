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
    <path d="M18.5 16.5v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3Z" />
    <path d="M18.5 2.5h-2v9h2v-9Z" />
    <path d="M4.5 2.5h-2v16h2v-16Z" />
    <path d="M11.5 2.5h-2v4h2v-4Z" />
    <path d="M11.5 8.5h-2v4h2v-4Z" />
    <path d="M11.5 14.5h-2v4h2v-4Z" />
  </svg>
);

export default Icon;
