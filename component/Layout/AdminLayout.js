import AdminSider from "./AdminSider";

const {Component} = require("react");
import {Breadcrumb, Layout} from "antd";
import AdminHeader from "./AdminHeader";

const {Content, Footer} = Layout;

export default class AdminLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <AdminSider/>
                <Layout className="site-layout">
                    <AdminHeader />
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>{this.props.ptitle}</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.props.ctitle}</Breadcrumb.Item>
                        </Breadcrumb>
                        {this.props.children}
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
