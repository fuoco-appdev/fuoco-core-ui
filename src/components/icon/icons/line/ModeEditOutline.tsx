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
    <path d="M2.999 21.001h3.75l11.06-11.06-3.75-3.75-11.06 11.06v3.75Zm2-2.92 9.06-9.06.92.92-9.06 9.06h-.92v-.92Z" />
    <path d="M18.369 3.291a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34Z" />
  </svg>
);

export default Icon;
