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
      d="m12 2-5.5 9h11L12 2Zm5.5 20a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM11 13.5H3v8h8v-8Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
