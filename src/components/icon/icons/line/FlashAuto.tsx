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
    <path d="M2.4 1.5v12h3v9l7-12h-4l4-9h-10Zm16 0h-2l-3.2 9h1.9l.7-2H19l.7 2h1.9l-3.2-9Zm-2.15 5.65L17.4 3.5l1.15 3.65h-2.3Z" />
  </svg>
);

export default Icon;
