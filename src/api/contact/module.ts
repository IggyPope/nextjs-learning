type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  birthday: string;
};

export const submitFormData = async (contactData: ContactPayload) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }

  return data;
};
