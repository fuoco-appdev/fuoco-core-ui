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
    <path d="m12 6.19 5 4.5v7.81h-2v-6H9v6H7v-7.81l5-4.5Zm0-2.69-10 9h3v8h6v-6h2v6h6v-8h3l-10-9Z" />
  </svg>
);

export default Icon;
