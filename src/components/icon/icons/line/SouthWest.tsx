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
    <path d="M14.5 19.5v-2H7.91L19.5 5.91 18.09 4.5 6.5 16.09V9.5h-2v10h10Z" />
  </svg>
);

export default Icon;
