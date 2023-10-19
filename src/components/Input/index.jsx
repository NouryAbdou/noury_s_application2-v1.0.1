import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    cyan_900_19: "bg-cyan-900_19",
    white_A700: "bg-white-A700 text-black-900_b2",
  },
};
const shapes = { square: "rounded-none", round: "rounded" };
const sizes = {
  xs: "p-1",
  sm: "p-[7px]",
  md: "pb-2.5 pt-[9px] px-[9px]",
  lg: "pb-5 pt-[15px] px-[15px]",
  xl: "pb-[13px] pt-4 px-[13px]",
  "2xl": "pb-[17px] pt-[18px] px-[17px]",
  "3xl": "pb-4 pl-4 pr-3 pt-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["cyan_900_19", "white_A700"]),
};

export { Input };
