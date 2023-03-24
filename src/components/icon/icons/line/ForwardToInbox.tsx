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
    <path d="M19.5 2.5h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2h-9v-10l8 5 8-5v5h2v-7c0-1.1-.9-2-2-2Zm-8 7-8-5h16l-8 5Zm7 4 4 4-4 4v-3h-4v-2h4v-3Z" />
  </svg>
);

export default Icon;
