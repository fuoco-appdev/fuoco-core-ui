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
    <path d="M18 2H6v6l2 3v11h8V11l2-3V2Zm-2 2v1H8V4h8Zm-2 6.4V20h-4v-9.61l-2-3V7h8v.39l-2 3.01Z" />
    <path d="M12 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default Icon;
