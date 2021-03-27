import React, {Component} from "react";
import App from 'next/app'
import {ConfigProvider} from 'antd';
import {IntlProvider} from "react-intl";
import 'antd/dist/antd.css';
import "../public/css/global.css";

import zhCN from "antd/lib/locale-provider/zh_CN";
import zh from "../public/locales/zh-CN";
import en_US from "antd/lib/locale-provider/en_US";
import en from "../public/locales/en";

export default class MyApp extends App {
    state = {
        "zh-CN": {antd: zhCN, 'intl': zh},
        "en": {antd: en_US, 'intl': en},
    }

    static async getInitialProps({Component, ctx}) {
        let {req: {locale}} = ctx
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {pageProps, locale}
    }

    render() {
        const {Component, pageProps, locale} = this.props
        let lang = locale ? locale : "en"
        return (
            <IntlProvider locale={lang} messages={this.state[lang]['intl']}>
                <ConfigProvider locale={this.state[lang]['antd']}>
                    <Component {...pageProps} />
                </ConfigProvider>
            </IntlProvider>
        )
    }
}

