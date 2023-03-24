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
      d="M.46 6.5C1.19 5.914 5.566 2.416 12 2.416c6.434 0 10.809 3.498 11.54 4.082l.072.058L12 21.583.388 6.557l.072-.058Zm20.466.469C19.034 5.78 15.923 4.333 12 4.333S4.966 5.78 3.074 6.97L12 18.517l8.926-11.548Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
