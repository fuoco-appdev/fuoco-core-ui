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
    <path d="m12 6.49 7.53 13.01H4.47L12 6.49Zm0-3.99-11 19h22l-11-19Zm1 14h-2v2h2v-2Zm0-6h-2v4h2v-4Z" />
  </svg>
);

export default Icon;
