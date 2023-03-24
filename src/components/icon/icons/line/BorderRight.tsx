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
    <path d="M7 21h2v-2H7v2ZM3 5h2V3H3v2Zm4 0h2V3H7v2Zm0 8h2v-2H7v2Zm-4 8h2v-2H3v2Zm8 0h2v-2h-2v2Zm-8-8h2v-2H3v2Zm0 4h2v-2H3v2Zm0-8h2V7H3v2Zm8 8h2v-2h-2v2Zm4-4h2v-2h-2v2Zm4-10v18h2V3h-2Zm-4 18h2v-2h-2v2Zm0-16h2V3h-2v2Zm-4 8h2v-2h-2v2Zm0-8h2V3h-2v2Zm0 4h2V7h-2v2Z" />
  </svg>
);

export default Icon;
