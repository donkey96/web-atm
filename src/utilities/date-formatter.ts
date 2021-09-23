export const DateFormatter = (date: Date) => {
  const year: string = `${date.getFullYear()}`;
  const month: string = (`0${(date.getMonth() + 1)}`).slice(-2);
  const day: string = (`0${date.getDate()}`).slice(-2);
  return `${year}/${month}/${day}`
}