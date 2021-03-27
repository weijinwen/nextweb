import {Layout, Menu} from "antd";
import {Component} from "react";

const {Header} = Layout;

export default class AdminHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header className="site-layout-background" style={{padding: 0, height: "48px"}}>

            </Header>
        )
    }
}
