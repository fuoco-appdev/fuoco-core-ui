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
    <path d="M2.5 9v2h19V9h-19Zm0 6h5v-2h-5v2Zm7 0h5v-2h-5v2Zm7 0h5v-2h-5v2Z" />
  </svg>
);

export default Icon;
