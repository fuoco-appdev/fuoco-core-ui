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
    <path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2Z" />
  </svg>
);

export default Icon;
