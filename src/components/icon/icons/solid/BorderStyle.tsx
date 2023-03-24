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
      d="M3 3v18h2V5h16V3H3Zm18 10h-2v-2h2v2Zm-2 4h2v-2h-2v2ZM7 21h2v-2H7v2Zm10 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8 0h-2v-2h2v2Zm8-12h-2V7h2v2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
