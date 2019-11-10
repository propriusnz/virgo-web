import App from "next/app";
import React from "react";
import {Provider} from 'react-redux'
import store from '../src/redux/store'


class MyApp extends App{

    constructor(props) {
        super(props);
        const { Component, pageProps, router } = props;
        this.state = { Component, pageProps, router };
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
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        )
    }
}

export default MyApp
