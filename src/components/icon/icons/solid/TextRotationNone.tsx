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
      d="m8.6 14 .9-2.2h5l.9 2.2h2.1L12.75 3h-1.5L6.5 14h2.1ZM21 18l-3-3v2H5v2h13v2l3-3Zm-7.13-8L12 4.98 10.13 10h3.74Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
