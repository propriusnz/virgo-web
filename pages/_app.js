import App from "next/app";
import React from "react";
import {Provider} from 'react-redux'
import store from '../src/redux/store'

import {ConfigProvider} from 'antd'
import {addLocaleData,IntlProvider} from 'react-intl'


//处理对象嵌套
import Flat from 'flat'

//引入中英文对象
import _ZH from '../locales/zh-CN'
import _EN from '../locales/en-US'
import Aux from "../src/components/hoc/Aux";


class MyApp extends App{

    constructor(props) {
        super(props);
        const { Component, pageProps, router } = props;
        this.state = { Component, pageProps, router };
    }


    getLocale = (languages) =>{
        const appLocale = this.getLocaleDatas(languages);
        addLocaleData(...appLocale.data);
        return appLocale
    };


    getLocaleDatas = (lang) =>{
        let result = {};
        switch (lang) {
            case 'zh-CN':
                result = _ZH;
                break;
            case 'en-US':
                result = _EN;
                break;
            default:
                result = _ZH
        }
        return result;
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.Component !== prevState.Component
            || nextProps.pageProps !== prevState.pageProps
            || nextProps.router !== prevState.router) {
            return {
                Component: nextProps.Component,
                pageProps: nextProps.pageProps,
                router: nextProps.router
            };
        }
        return null;
    }

    render(){
        const { Component, pageProps, router } = this.props;
        const languages = router.query.lang || 'zh-CN';
        const appLocale = this.getLocale(languages);
        return (
           <Aux>
               <Provider store={store}>
                   <ConfigProvider locale={appLocale.antd}>
                       <IntlProvider
                           locale={appLocale.locale}
                           messages={Flat(appLocale.messages)}
                           formats={appLocale.formats}
                       >
                           <Component {...pageProps}/>
                       </IntlProvider>
                   </ConfigProvider>
               </Provider>
           </Aux>
        )
    }
}

export default MyApp
