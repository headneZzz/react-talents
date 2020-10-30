import {Button, Input, Layout, Menu, Modal} from "antd";
import React, {useEffect, useState} from "react";
import News from "./News";
import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";
import {CheckCircleOutlined, CloseCircleOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import Sidebar from "../components/Sidebar";

export default function MainPage() {
    const {Header, Content, Footer, Sider} = Layout;
    const [isCollapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(prevState => !prevState);
    };
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sidebar/>
            <Layout className="site-layout" style={{marginLeft: 200}}>
                <News/>
                <Footer style={{textAlign: 'center'}}>Flex boys</Footer>
            </Layout>
        </Layout>
    )
}