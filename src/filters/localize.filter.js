import store from '@/store';
import ru from '@/locales/ru.json';
import en from '@/locales/en.json';
import wasted from '@/locales/wasted.json';
import ru_alt from '@/locales/ru_alt.json';

const locales = {
    'English': en,
    'Русский': ru,
    'Wasted': wasted,
    'Heccrbq': ru_alt,
}


/**
 * @param {String} key - Text to localize.
 * @param {Boolean} error - Show error if can't localize text.
*/
export default function localizeFilter(key, error = true) {
	const errorMessage = error ? `[Localize error]: key ${key} not found` : key;
    const locale = store.getters.getLocale || 'English';

    // console.log(locale);
    return locales[locale][key] || errorMessage;
}