import { IntlShape, useIntl } from 'react-intl';
import enUSLanguage from './Entries/en-US'

class Locale {
    currentLocale: string;

    constructor(locale: string) {
        this.currentLocale = locale;
    }

    getLocaleMessages(): any {
        switch (this.currentLocale) {
            case enUSLanguage.locale:
                return enUSLanguage.messages;
            default:
                return enUSLanguage.messages;
        }
    }
}

interface RichIntlShape extends IntlShape {
    formatSimpleMessage(id: string): string;
}

export const useIntlExtended = (): RichIntlShape => {
    const intl = useIntl();

    const formatSimpleMessage = (id: string) => intl.formatMessage({id});

    return { ...intl, formatSimpleMessage };
};

export default Locale
