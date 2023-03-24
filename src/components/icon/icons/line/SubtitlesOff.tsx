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
    <path d="M20.48 3.295H7.31l2 2h11.17v11.17l1.76 1.76c.15-.28.24-.59.24-.93v-12c0-1.1-.9-2-2-2Z" />
    <path d="M18.48 9.295h-5.17l2 2h3.17v-2Z" />
    <path d="m1.52 3.165 1.2 1.2c-.15.28-.24.59-.24.93v12c0 1.1.9 2 2 2h13.17l2.96 2.96 1.41-1.41-19.09-19.1-1.41 1.42Zm2.96 2.96 3.17 3.17H6.48v2h2v-1.17l3.17 3.17H6.48v2h7.17l2 2H4.48V6.125Z" />
  </svg>
);

export default Icon;
