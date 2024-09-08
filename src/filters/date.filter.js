import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
// import store from '@/store';

// const locales = {
// 	'English': undefined,
// 	'Русский': ru,
//     'Wasted': ru,
// }


/**
 * @param {Date} date - 
 * @param {Boolean} onlyTime - **'H:mm'** Format if true. **'d MMMM H:mm'** if false.
*/
export default function dateFilter(date, onlyTime = false) {
    const currentDate = Date.now();

    if (onlyTime == false) {
        if (new Date(currentDate).getFullYear() != new Date(date).getFullYear()) {
            // return format(new Date(date), 'd MMMM yyyy H:mm', { locale: locales[store.getters.getLocale] });
            return format(new Date(date), 'd MMMM yyyy H:mm', { locale: ru });
        } else {
            // return format(new Date(date), 'd MMMM H:mm', { locale: locales[store.getters.getLocale] });
            return format(new Date(date), 'd MMMM H:mm', { locale: ru });
        }
    }

    return format(new Date(date), 'H:mm');
}