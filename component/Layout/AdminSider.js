import {Layout, Menu} from "antd";
import {FileOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Component} from "react";

const {Sider} = Layout;
const {SubMenu} = Menu;

export default class AdminSider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    onCollapse(collapsed) {
        this.setState({collapsed});
    }

    render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse.bind(this)}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined/>}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
