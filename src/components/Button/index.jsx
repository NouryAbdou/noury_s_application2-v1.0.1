import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    cyan_900_ab: "bg-cyan-900_ab text-white-A700",
    white_A700: "bg-white-A700 text-cyan-900_19",
    white_A700_7f: "bg-white-A700_7f text-black-900_b2",
    deep_orange_400: "bg-deep_orange-400",
    orange_200: "bg-orange-200",
    cyan_900_19: "bg-cyan-900_19 text-gray-700_99",
    cyan_900: "bg-cyan-900 text-white-A700",
  },
  outline: { black_900: "border border-black-900 border-solid text-black-900" },
};
const sizes = {
  xs: "py-px",
  sm: "p-[5px]",
  md: "p-2",
  lg: "p-3",
  xl: "p-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "cyan_900_ab",
    "white_A700",
    "white_A700_7f",
    "deep_orange_400",
    "orange_200",
    "cyan_900_19",
    "cyan_900",
    "black_900",
  ]),
};

export { Button };
