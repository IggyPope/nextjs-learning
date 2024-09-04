import { forwardRef } from 'react';
import classNames from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  errorMessage?: string;
} & UseFormRegisterReturn &
  Omit<React.ComponentPropsWithoutRef<'input'>, 'className'>;

const FormInputWithRef: React.ForwardRefRenderFunction<
  HTMLInputElement,
  Props
> = ({ errorMessage, ...otherProps }, ref) => {
  return (
    <div className="flex w-full flex-col">
      <input
        {...otherProps}
        ref={ref}
        className={classNames(
          'w-full border p-2',
          errorMessage ? 'border-red-500' : 'border-gray-300',
          'focus:outline-gray-400',
        )}
      />
      <p className="h-5 text-sm text-red-500">{errorMessage}</p>
    </div>
  );
};

export const FormInput = forwardRef(FormInputWithRef);
