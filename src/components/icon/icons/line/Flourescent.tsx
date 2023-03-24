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
    <path d="M5.004 15h14V9h-14v6Zm2-4h10v2h-10v-2Z" />
    <path d="M13.004 2h-2v3h2V2Z" />
    <path d="M19.08 4.596 17.29 6.4l1.42 1.41 1.79-1.803-1.42-1.41Z" />
    <path d="M13.004 19h-2v3h2v-3Z" />
    <path d="m17.294 17.71 1.79 1.8 1.42-1.42-1.8-1.79-1.41 1.41Z" />
    <path d="M4.906 4.602 3.499 6.009 5.288 7.8l1.407-1.41-1.79-1.789Z" />
    <path d="m5.298 16.287-1.802 1.79 1.41 1.418 1.802-1.79-1.41-1.418Z" />
  </svg>
);

export default Icon;
