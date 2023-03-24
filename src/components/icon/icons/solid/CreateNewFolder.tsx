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
      d="M12 6h8c1.11 0 2 .89 2 2v10c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-12c0-1.11.88-2 1.99-2h6l2 2Zm4 8h3v-2h-3V9h-2v3h-3v2h3v3h2v-3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
