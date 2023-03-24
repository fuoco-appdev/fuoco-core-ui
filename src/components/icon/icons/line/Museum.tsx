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
    <path d="M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2Zm-4 9H6V9h12v11Z" />
    <path d="m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2v-4Z" />
  </svg>
);

export default Icon;
