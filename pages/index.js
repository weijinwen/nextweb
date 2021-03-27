import {Component} from "react";
import AdminLayout from "../component/Layout/AdminLayout";
import {FormattedMessage} from "react-intl";

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state={
            message:""
        }
    }

    async componentDidMount() {
        let res = await fetch('http://localhost:3000/json.json')
        res.json().then((data) => {
           this.setState({message:data.message})
        })
    }

    render() {
        return (
            <AdminLayout ptitle={<FormattedMessage id="help"/>} ctitle={<FormattedMessage id="help"/>}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    {this.state.message}
                </div>
            </AdminLayout>
        )
    }
}
