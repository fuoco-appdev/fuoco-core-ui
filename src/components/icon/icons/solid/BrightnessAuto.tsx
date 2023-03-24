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
      d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69Zm-6.85 3.96L12 9l-1.15 3.65h2.3ZM13.6 14l.7 2h1.9L13 7h-2l-3.2 9h1.9l.7-2h3.2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
