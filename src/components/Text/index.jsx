import React from "react";

const sizeClasses = {
  txtInterRegular14Black900: "font-inter font-normal",
  txtInterRegular13Black900: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterBold14Black90066: "font-bold font-inter",
  txtInterSemiBold25: "font-inter font-semibold",
  txtInterRegular12WhiteA700: "font-inter font-normal",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterSemiBold12Gray900: "font-inter font-semibold",
  txtInterSemiBold16Gray900: "font-inter font-semibold",
  txtInterRegular12Black900: "font-inter font-normal",
  txtInterMedium14Bluegray800: "font-inter font-medium",
  txtInterMedium16Black900: "font-inter font-medium",
  txtInterRegular14WhiteA700: "font-inter font-normal",
  txtInterMedium12Gray900: "font-inter font-medium",
  txtInterMedium14Gray900: "font-inter font-medium",
  txtInterRegular16Black900: "font-inter font-normal",
  txtInterMedium13Cyan90019: "font-inter font-medium",
  txtInterRegular10WhiteA700: "font-inter font-normal",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterRegular16Bluegray400: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtInterRegular10: "font-inter font-normal",
  txtInterBold14: "font-bold font-inter",
  txtInterMedium12: "font-inter font-medium",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterMedium13: "font-inter font-medium",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterBold32: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterRegular20Bluegray80001: "font-inter font-normal",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterBold12: "font-bold font-inter",
  txtInterRegular16Bluegray80001: "font-inter font-normal",
  txtInterRegular12Gray70099: "font-inter font-normal",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterSemiBold12WhiteA700: "font-inter font-semibold",
  txtInterRegular12Gray700: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular13Gray900: "font-inter font-normal",
  txtInterSemiBold14Black90066: "font-inter font-semibold",
  txtInterRegular18: "font-inter font-normal",
  txtInterMedium12Black900: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
