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
      d="M6 5h12c1.1 0 2 .9 2 2v2.15c-1.16.42-2 1.52-2 2.82V14H6v-2.03c0-1.31-.84-2.41-2-2.82V7c0-1.1.9-2 2-2Zm13 7c0-1.1.9-2 2-2s2 .9 2 2v5c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2s2 .9 2 2v3h14v-3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
