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
    <path d="M22 8V2L2 22h16V8h4Z" />
    <path d="M20 22h2v-2h-2v2Z" />
    <path d="M20 10v8h2v-8h-2Z" />
  </svg>
);

export default Icon;
