import {Layout, Menu} from "antd";
import {Component} from "react";
import {SettingOutlined} from "@ant-design/icons";
import cookie from 'react-cookies'

const {Header} = Layout;
const {SubMenu} = Menu;

export default class AdminHeader extends Component {
    constructor(props) {
        super(props);
    }

    handleSelectLangClick(e) {
        cookie.save("locale_lang", e.key)
        window.location.reload(true);
    }

    render() {
        return (
            <Header className="site-layout-background" style={{padding: 0, height: "48px"}}>
                <div style={{display: "flex", height: "100%", padding: '0 16px'}}>
                    <div style={{flex: "1 1 0%", height: "100%"}} />
                    <div style={{display: "flex", float: "right", height: "100%"}}>
                        <Menu style={{height: "100%", lineHeight: "49px"}} onClick={this.handleSelectLangClick.bind(this)} mode="horizontal">
                            <SubMenu key="SubMenu" icon={<SettingOutlined/>}>
                                <Menu.Item key="en">英文</Menu.Item>
                                <Menu.Item key="zh-CN">中文</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>
            </Header>
        )
    }
}
