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
      d="M9 18H4V5h5v13Zm6 0h-5v-6h5v6Zm1 0h5v-6h-5v6Zm-6-7V5h11v6H10Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
