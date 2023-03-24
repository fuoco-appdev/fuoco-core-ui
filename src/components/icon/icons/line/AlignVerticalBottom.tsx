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
    <path d="M22 22H2v-2h20v2ZM10 2H7v16h3V2Zm7 6h-3v10h3V8Z" />
  </svg>
);

export default Icon;
