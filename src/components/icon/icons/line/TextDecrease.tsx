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
    <path d="M.995 19h2.42l1.27-3.58h5.65l1.26 3.58h2.42L8.755 5h-2.5L.995 19Zm4.42-5.61 2.03-5.79h.12l2.03 5.79h-4.18ZM23.005 11v2h-8v-2h8Z" />
  </svg>
);

export default Icon;
