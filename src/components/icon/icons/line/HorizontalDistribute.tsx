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
    <path d="M4 22H2V2h2v20ZM22 2h-2v20h2V2Zm-8.5 5h-3v10h3V7Z" />
  </svg>
);

export default Icon;
