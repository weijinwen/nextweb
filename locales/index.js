import zhCN from "antd/lib/locale-provider/zh_CN";
import zh from "../locales/zh-CN";
import en_US from "antd/lib/locale-provider/en_US";
import en from "../locales/en";

const locales = {
    "zh-CN": {antd: zhCN, 'intl': zh},
    "en": {antd: en_US, 'intl': en},
}

export default locales;
