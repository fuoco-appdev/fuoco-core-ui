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
    <path d="M22 2v2H2V2h20ZM7 22h3V6H7v16Zm7-6h3V6h-3v10Z" />
  </svg>
);

export default Icon;
