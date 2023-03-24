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
    <path d="M15.5 15.38V8.62L18.88 12l-3.38 3.38ZM14 19l7-7-7-7v14Zm-4 0V5l-7 7 7 7Z" />
  </svg>
);

export default Icon;
