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
      d="M8.5 7H6v10h2.5L5 20.5 1.5 17H4V7H1.5L5 3.5 8.5 7ZM10 7V5h12v2H10Zm0 12h12v-2H10v2Zm12-6H10v-2h12v2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
