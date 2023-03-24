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
    <path d="M11 11H5V7H3v10h2v-4h6v4h2V7h-2v4Zm10 0h-2V9h-2v2h-2v2h2v2h2v-2h2v-2Z" />
  </svg>
);

export default Icon;
