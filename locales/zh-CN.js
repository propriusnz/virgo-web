import appLocaleData from 'react-intl/locale-data/zh';
import zhMessages from './zh.js';
import antdZh from 'antd/lib/locale-provider/zh_CN'; //antd语言包

let appLocale = {
    messages: {
        ...zhMessages,
    },
    antd: antdZh,
    locale: 'zh-CN',
    data: appLocaleData,
};

export default appLocale;
