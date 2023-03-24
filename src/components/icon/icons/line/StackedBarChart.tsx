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
    <path d="M5.5 9.5h3v10h-3v-10Zm0-5h3v4h-3v-4Zm10 11h3v4h-3v-4Zm0-3h3v2h-3v-2Zm-5 0h3v7h-3v-7Zm0-4h3v3h-3v-3Z" />
  </svg>
);

export default Icon;
