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
    <path d="M15 21h2v-2h-2v2Zm4-12h2V7h-2v2ZM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2Zm16-2v2h2c0-1.1-.9-2-2-2Zm-8 20h2V1h-2v22Zm8-6h2v-2h-2v2ZM15 5h2V3h-2v2Zm4 8h2v-2h-2v2Zm0 8c1.1 0 2-.9 2-2h-2v2Z" />
  </svg>
);

export default Icon;
