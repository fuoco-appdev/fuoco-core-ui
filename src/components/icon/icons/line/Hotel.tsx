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
    <path d="M7 13.5c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm12-3h-8v8H3v-10H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4Zm2 8h-8v-6h6c1.1 0 2 .9 2 2v4Z" />
  </svg>
);

export default Icon;
