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
    <path d="M5 4h14v2H5V4Zm0 10h4v6h6v-6h4l-7-7-7 7Zm8-2v6h-2v-6H9.83L12 9.83 14.17 12H13Z" />
  </svg>
);

export default Icon;
