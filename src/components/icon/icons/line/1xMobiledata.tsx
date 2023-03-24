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
    <path d="M4.5 7h4v10h-2V9h-2V7Zm11.83 4.72L19.16 7h-2.33l-1.66 2.77L13.5 7h-2.33L14 11.72 10.83 17h2.33l2-3.34 2 3.34h2.34l-3.17-5.28Z" />
  </svg>
);

export default Icon;
