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
      d="M22 18V3H2v15H0v2h24v-2h-2Zm-8 0h-4v-1h4v1ZM4 15h16V5H4v10Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
