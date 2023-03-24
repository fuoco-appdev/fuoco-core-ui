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
    <path d="M12 3.5c-4.69 0-8.93 1.9-12 4.98L12 20.5 24 8.48A16.88 16.88 0 0 0 12 3.5Z" />
  </svg>
);

export default Icon;
