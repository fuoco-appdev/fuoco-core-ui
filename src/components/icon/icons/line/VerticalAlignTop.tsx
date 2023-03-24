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
    <path d="M8 11h3v10h2V11h3l-4-4-4 4ZM4 3v2h16V3H4Z" />
  </svg>
);

export default Icon;
