import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); // 0 = enero, ...

const rta = subDays(date, 2);   // Substract days from a date
const str = format(rta, 'yyyy/MM/dd');

console.log(str);

