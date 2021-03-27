import {DatePicker} from 'antd';
import {Component} from "react";
import {FormattedMessage} from "react-intl";
import Layout from "../component/Layout";


class Blog extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(props) {
        let data = {s: "ss"}
        return {
            data
        }
    }

    render() {
        return (
            <Layout>
                <DatePicker/>
                <FormattedMessage id="help"/>
            </Layout>
        )
    }
}

export default Blog
