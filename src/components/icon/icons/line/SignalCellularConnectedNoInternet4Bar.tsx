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
    <path d="M20 18h2v-8h-2v8Zm0 4h2v-2h-2v2ZM2 22h16V8h4V2L2 22Z" />
  </svg>
);

export default Icon;
