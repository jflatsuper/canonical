import { MONTHS } from "./constants";

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return `${dateObj.getDate()} ${
    MONTHS[dateObj.getMonth()]
  } ${dateObj.getFullYear()}`;
};
