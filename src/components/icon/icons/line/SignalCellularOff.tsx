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
    <path d="m21.43 1-8.31 8.31 8.31 8.3V1ZM5.34 4.36 3.93 5.77l6.36 6.37L1.43 21h17.73l2 2 1.41-1.41L5.34 4.36Z" />
  </svg>
);

export default Icon;
