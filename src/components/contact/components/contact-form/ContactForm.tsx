import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { useContactMutation } from '@/api/contact/queries';
import { type ContactSchema, contactSchema } from './schema';
import { FormInput } from './components/form-input/FormInput';

export const ContactForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const { mutate } = useContactMutation();

  const onSubmit = (contactData: ContactSchema) => {
    mutate(contactData, {
      onSuccess: () => {
        alert('Form submitted successfully');
        reset();
      },
      onError: (error: unknown) => {
        try {
          if (error instanceof Error) {
            const errorData = JSON.parse(error.message);

            Object.keys(errorData).forEach((key) => {
              setError(key as keyof ContactSchema, {
                message: errorData[key][0],
              });
            });
          } else {
            throw error;
          }
        } catch (error) {
          alert('An error occurred while submitting the form');
        }
      },
    });
  };

  return (
    <div className="flex w-full max-w-sm flex-1 flex-col items-center gap-4">
      <h1>Contact us</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
        noValidate
      >
        <div className="flex w-full flex-col gap-2">
          <FormInput
            {...register('firstName')}
            type="text"
            placeholder="First Name"
            errorMessage={errors.firstName?.message}
          />
          <FormInput
            {...register('lastName')}
            type="text"
            placeholder="Last Name"
            errorMessage={errors.lastName?.message}
          />
          <FormInput
            {...register('email')}
            type="email"
            placeholder="Email"
            errorMessage={errors.email?.message}
          />
          <FormInput
            {...register('address')}
            type="text"
            placeholder="Address"
            errorMessage={errors.address?.message}
          />
          <FormInput
            {...register('birthday')}
            type="date"
            placeholder="Birthday"
            errorMessage={errors.birthday?.message}
          />
        </div>
        <button
          type="submit"
          className={classNames(
            'w-full border border-gray-300 p-2',
            'hover:bg-gray-100',
          )}
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
