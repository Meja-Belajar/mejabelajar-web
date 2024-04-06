export const maxDateUtil = () => {
  const today = new Date();

  // Calculate the date 15 years ago
  const minDate = new Date(today.getFullYear() - 15, today.getMonth(), today.getDate());

  // Format the minDate as YYYY-MM-DD
  const minDateString = minDate.toISOString().split('T')[0];

  return minDateString
}

export const dateDiff = (date1: string, date2: string) => {
  const date1Obj = new Date(date1);
  const date2Obj = new Date(date2);

  const diffTime = Math.abs(date2Obj.getTime() - date1Obj.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const days = Math.floor(diffDays / 1);
  const hours = Math.floor((diffDays % 1) * 24);
  
  return `${days}d ${hours}h`;
}

export const dateFormat = (date: string) => {
  const dateObj = new Date(date);
  // return to format 01 January 2023, 00:00 AM
  return dateObj.toLocaleString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });



}