import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useContactMutation } from '@/api/contact/queries';
import { type ContactSchema, contactSchema } from './schema';

export const ContactForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmitSuccess = () => {
    alert('Form submitted successfully');
    reset();
  };

  const onSubmitError = (error: unknown) => {
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
  };

  const { mutate } = useContactMutation({
    onSuccess: onSubmitSuccess,
    onError: onSubmitError,
  });

  const onSubmit = (contactData: ContactSchema) => {
    mutate(contactData);
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
          <div className="flex w-full flex-col">
            <input
              {...register('firstName')}
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 p-2"
            />
            <p className="h-5 text-sm text-red-500">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="flex w-full flex-col">
            <input
              {...register('lastName')}
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 p-2"
            />
            <p className="h-5 text-sm text-red-500">
              {errors.lastName?.message}
            </p>
          </div>
          <div className="flex w-full flex-col">
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2"
            />
            <p className="h-5 text-sm text-red-500">{errors.email?.message}</p>
          </div>
          <div className="flex w-full flex-col">
            <input
              {...register('address')}
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 p-2"
            />
            <p className="h-5 text-sm text-red-500">
              {errors.address?.message}
            </p>
          </div>
          <div className="flex w-full flex-col">
            <input
              {...register('birthday')}
              type="date"
              placeholder="Birthday"
              className="w-full border border-gray-300 p-2"
            />
            <p className="h-5 text-sm text-red-500">
              {errors.birthday?.message}
            </p>
          </div>
        </div>
        <button type="submit" className="w-full border border-gray-300 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};
