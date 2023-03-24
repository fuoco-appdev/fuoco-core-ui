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
    <path d="M8.5 8.62v6.76L5.12 12 8.5 8.62ZM10 5l-7 7 7 7V5Zm4 0v14l7-7-7-7Z" />
  </svg>
);

export default Icon;
