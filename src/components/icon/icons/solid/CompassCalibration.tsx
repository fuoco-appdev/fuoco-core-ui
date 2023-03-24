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
      d="M2 7.15C4.56 4.59 8.1 3 12 3c3.9 0 7.44 1.59 10 4.14l-5 5a7.06 7.06 0 0 0-10 .01l-5-5ZM16 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
