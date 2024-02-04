/* eslint-disable @typescript-eslint/indent */
import { type DetailedHTMLProps, type InputHTMLAttributes } from 'react';
import { ErrorMessage } from 'components';

const shapes = {
  round: 'rounded',
} as const;
const variants = {
  fill: { white_A700: 'bg-white-A700' },
  outline: {
    blue_gray_100:
      'outline outline-[0.5px] outline-blue_gray-100 text-gray-600',
  },
} as const;
const sizes = { xs: 'pb-[13px] pt-3.5 px-[13px]' } as const;

export type InputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size' | 'prefix'
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    errors: string[] | string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

function Input({
  wrapClassName = '',
  className = '',
  name = '',
  placeholder = '',
  type = 'text',
  children,
  errors = [],
  label = '',
  prefix,
  suffix,
  onChange,
  shape = 'round',
  size = 'xs',
  variant = 'outline',
  color = 'blue_gray_100',
  ...restProps
}: InputProps) {
  const variantColor = variant && (variants[variant] as any)?.[color];
  return (
    <>
      <div className={`${wrapClassName}`}>
        <div
          className={`
              ${(shape && shapes[shape]) || ''}
              ${variantColor || ''}
              ${(size && sizes[size]) || ''}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        <div>{!!errors && <ErrorMessage errors={errors} />}</div>
      </div>
    </>
  );
}

export { Input };
