import React, {Component} from "react";
import App from 'next/app'
import {ConfigProvider} from 'antd';
import {IntlProvider} from "react-intl";
import locales from "../locales"

import 'antd/dist/antd.css';
import "../styles/global.css";


export default class MyApp extends App {

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
            <IntlProvider locale={lang} messages={locales[lang]['intl']}>
                <ConfigProvider locale={locales[lang]['antd']}>
                    <Component {...pageProps} />
                </ConfigProvider>
            </IntlProvider>
        )
    }
}

