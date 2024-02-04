import React from "react";

const sizeClasses = {
  txtPoppinsLight14: "font-light font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsLight13: "font-light font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsMedium26: "font-medium font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsExtraBold150: "font-extrabold font-poppins",
  txtPoppinsRegular40: "font-normal font-poppins",
  txtPoppinsMedium32: "font-medium font-poppins",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
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
