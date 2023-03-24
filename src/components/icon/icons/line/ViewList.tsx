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
    <path d="M3 5v14h18V5H3Zm4 2v2H5V7h2Zm-2 6v-2h2v2H5Zm0 2h2v2H5v-2Zm14 2H9v-2h10v2Zm0-4H9v-2h10v2Zm0-4H9V7h10v2Z" />
  </svg>
);

export default Icon;
