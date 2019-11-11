import appLocaleData from 'react-intl/locale-data/en';
import EnMessages from './en.js';
import antdEn from 'antd/lib/locale-provider/en_US'; //antd语言包

let appLocale = {
    messages: {
        ...EnMessages,
    },
    antd: antdEn,
    locale: 'en-US',
    data: appLocaleData,
};

export default appLocale;
