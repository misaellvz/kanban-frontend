import React from "react";

export type Props = Partial<{
  errors: string | string[];
  className: string;
}>;

export const ErrorMessage: React.FC<Props> = ({
  errors = [],
  className = "",
}) => {
  const errs = typeof errors === "string" ? [errors] : errors;
  return errs?.length > 0 ? (
    <div className={`text-red-500 text-left text-xs w-full mt-1 ${className}`}>
      {errs.join(", ")}
    </div>
  ) : (
    <></>
  );
};
