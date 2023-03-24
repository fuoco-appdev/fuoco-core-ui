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
      d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H4V5h16v14Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M19.41 10.42 17.99 9l-3.17 3.17-1.41-1.42L12 12.16 14.82 15l4.59-4.58Z"
      clipRule="evenodd"
    />
    <path d="M10 7H5v2h5V7Z" />
    <path d="M10 11H5v2h5v-2Z" />
    <path d="M10 15H5v2h5v-2Z" />
  </svg>
);

export default Icon;
