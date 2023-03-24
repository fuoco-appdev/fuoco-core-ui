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
    <path d="m17.965 6.705-1.41-1.41-6.34 6.34 1.41 1.41 6.34-6.34Zm4.24-1.41-10.58 10.58-4.18-4.17-1.41 1.41 5.59 5.59 12-12-1.42-1.41Zm-21.83 7.82 5.59 5.59 1.41-1.41-5.58-5.59-1.42 1.41Z" />
  </svg>
);

export default Icon;
