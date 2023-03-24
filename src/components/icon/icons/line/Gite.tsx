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
    <path d="M18 6.5H9v-2H7v2H6l-4 4v9h20v-9l-4-4Zm-14 6h10v5H4v-5Zm16 5h-4v-6.17l2-2 2 2v6.17Z" />
  </svg>
);

export default Icon;
