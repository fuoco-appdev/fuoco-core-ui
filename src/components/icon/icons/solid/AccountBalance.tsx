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
      d="m2 6 9.5-5L21 6v2H2V6Zm2 4v7h3v-7H4Zm6 0v7h3v-7h-3Zm11 9v3H2v-3h19Zm-5-9v7h3v-7h-3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
