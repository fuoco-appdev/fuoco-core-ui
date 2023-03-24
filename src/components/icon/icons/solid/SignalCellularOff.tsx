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
      d="M12.69 9.31 21 1v16.61l-8.31-8.3ZM3.5 5.77l1.41-1.41 17.23 17.23L20.73 23l-2-2H1l8.86-8.86L3.5 5.77Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
