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
    <path
      fillRule="evenodd"
      d="m15.17 11-3.58-3.59L13 6l6 6-6 6-1.42-1.41L15.17 13H1v-2h14.17ZM22 18h-2V6h2v12Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
