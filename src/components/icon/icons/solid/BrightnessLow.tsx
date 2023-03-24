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
      d="M23.31 12 20 15.31V20h-4.69L12 23.31 8.69 20H4v-4.69L.69 12 4 8.69V4h4.69L12 .69 15.31 4H20v4.69L23.31 12ZM6 12c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6-6 2.69-6 6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
