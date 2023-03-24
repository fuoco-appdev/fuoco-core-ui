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
    <path d="M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7Zm0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5Z" />
    <path d="M10 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M7 19h2c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h2v-2H7v2Z" />
  </svg>
);

export default Icon;
