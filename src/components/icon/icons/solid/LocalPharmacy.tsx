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
      d="M18.36 5H21v2l-2 6 2 6v2H3v-2l2-6-2-6V5h12.69l1.46-4 2.35.86L18.36 5ZM13 14h3v-2h-3V9h-2v3H8v2h3v3h2v-3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
