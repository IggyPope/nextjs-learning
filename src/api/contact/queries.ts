import { useMutation } from '@tanstack/react-query';
import { submitFormData } from './module';

type Props = {
  onSuccess: () => void;
  onError: (error: unknown) => void;
};

export const useContactMutation = ({ onSuccess, onError }: Props) =>
  useMutation({
    mutationFn: submitFormData,
    onSuccess,
    onError,
  });
