import {Layout, Menu} from "antd";
import {Component} from "react";

const {Header} = Layout;

export default class AdminHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header className="site-layout-background" style={{padding: 0}}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        )
    }
}
