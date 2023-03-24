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
      d="M14.5 7.9V6.08L19 5v13h-2V7.4l-2.5.5ZM8 8h2v4h4v2h-4v4H8v-4H4v-2h4V8Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
