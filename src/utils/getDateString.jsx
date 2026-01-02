export function getDateString (createDateUTC) {
  const date = new Date(createDateUTC);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
