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
      d="M14 6v3h-4V6H7l5-5 5 5h-3Zm-8 4h3v4H6v3l-5-5 5-5v3Zm17 2-5-5v3h-3v4h3v3l5-5Zm-13 6v-3h4v3h3l-5 5-5-5h3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
