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
      d="M15.59 10.09 13 12.67V3h-2v9.67l-2.59-2.58L7 11.5l5 5 5-5-1.41-1.41ZM19 19v-7h2v7c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-7h2v7h14Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
