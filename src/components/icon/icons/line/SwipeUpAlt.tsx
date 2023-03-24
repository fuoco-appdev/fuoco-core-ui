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
    <path d="m13 6.83 1.59 1.59L16 7l-4-4-4 4 1.41 1.41L11 6.83v4.27a5 5 0 1 0 2 0V6.83ZM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z" />
  </svg>
);

export default Icon;
