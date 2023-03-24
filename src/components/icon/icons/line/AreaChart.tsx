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
    <path d="m17 7.5-5-4-5 7-4-3v13h18v-13h-4Zm2 9.95L12 12l-4 5.5-3-2.4v-3.6l2.44 1.83 4.96-6.95 3.9 3.12H19v7.95Z" />
  </svg>
);

export default Icon;
