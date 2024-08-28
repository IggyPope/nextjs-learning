export const formatDateString = (date: string) => {
  const dateObj = new Date(date);

  const dateString = dateObj.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  return dateString.replace(/ at/g, ',');
};
