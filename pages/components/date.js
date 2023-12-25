import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    if (!dateString) {
      return null; // Or handle the case when dateString is undefined
    }
  
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
  }
  