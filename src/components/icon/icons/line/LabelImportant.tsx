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
    <path d="M3.5 18.995h11c.67 0 1.27-.32 1.63-.83l4.37-6.16-4.37-6.16c-.36-.51-.96-.84-1.63-.84h-11l5 7-5 6.99Z" />
  </svg>
);

export default Icon;
