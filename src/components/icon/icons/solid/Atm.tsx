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
      d="M3 9h3c.55 0 1 .45 1 1v5H5.5v-1.5h-2V15H2v-5c0-.55.45-1 1-1Zm5 1.5V9h6v1.5h-2.25V15h-1.5v-4.5H8ZM5.5 12h-2v-1.5h2V12Zm11-3H21c.55 0 1 .45 1 1v5h-1.5v-4.51h-1V14H18v-3.5h-1V15h-1.5v-5c0-.55.45-1 1-1Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
