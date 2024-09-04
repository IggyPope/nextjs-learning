import { ContactForm } from './components/contact-form/ContactForm';

export const Contact: React.FC = () => {
  return (
    <main className="container mx-auto flex w-full flex-1 flex-col items-center px-4">
      <ContactForm />
    </main>
  );
};
