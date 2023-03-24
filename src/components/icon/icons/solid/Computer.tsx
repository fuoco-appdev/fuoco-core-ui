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
      d="M21.99 16c0 1.1-.89 2-1.99 2h4v2H0v-2h4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2l-.01 10ZM20 6H4v10h16V6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
