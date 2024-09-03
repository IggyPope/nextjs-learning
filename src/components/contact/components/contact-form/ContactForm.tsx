import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { type ContactSchema, contactSchema } from '@/schemas/contact.schema';

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

  const submitFormData = async (
    data: ContactSchema,
  ): Promise<{ message: string }> => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(JSON.stringify(errorData));
    }

    return response.json();
  };

  const { mutate } = useMutation({
    mutationFn: submitFormData,
    onSuccess: () => {
      alert('Form submitted successfully');
      reset();
    },
    onError: (error) => {
      try {
        const errorData = JSON.parse(error.message);

        Object.keys(errorData.errors).forEach((key) => {
          setError(key as keyof ContactSchema, {
            message: errorData[key][0],
          });
        });
      } catch (error) {
        alert('An error occurred while submitting the form');
      }
    },
  });

  const onSubmit = (data: ContactSchema) => {
    mutate(data);
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
