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
      d="M3.59 5.59 2 4l1.44-1.38 16.97 16.97L19 21l-2-2H5c-1.1 0-2-.9-2-2V7c0-.55.23-1.05.59-1.41Zm14.04.25L22 12l-2.64 3.73L8.66 5H16c.67 0 1.27.33 1.63.84Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
