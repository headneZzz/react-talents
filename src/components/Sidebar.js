import {Layout, Menu} from "antd";
import React, {useState} from "react";
import "./top_navigation.css"
import UserAddOutlined from "@ant-design/icons/lib/icons/UserAddOutlined";
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined";
import TableOutlined from "@ant-design/icons/lib/icons/TableOutlined";
import FileDoneOutlined from "@ant-design/icons/lib/icons/FileDoneOutlined";

export default function Sidebar() {
    const {Sider} = Layout;
    const [selectKey, setSelectKey] = useState("news");

    return (
        <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }}>
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="inline"
                onClick={(event) => setSelectKey(event.key)}
                selectedKeys={[selectKey]}
            >
                <Menu.Item key="news" icon={<TableOutlined/>}>
                    Новости
                </Menu.Item>
                <Menu.Item key="tests" icon={<FileDoneOutlined/>}>
                    Тесты
                </Menu.Item>
                <Menu.Item key="users" icon={<TeamOutlined/>}>
                    Пользователи
                </Menu.Item>
                <Menu.Item key="regs" icon={<UserAddOutlined/>}>
                    Регистрации
                </Menu.Item>
            </Menu>
        </Sider>
    )
}