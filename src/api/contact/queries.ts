import { useMutation } from '@tanstack/react-query';
import { submitFormData } from './module';

export const useContactMutation = () =>
  useMutation({
    mutationFn: submitFormData,
  });
