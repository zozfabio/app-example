import React, { ReactElement } from 'react';
import { Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function UserAvatar(): ReactElement {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <UserOutlined
                style={{
                    fontSize: '18px',
                    lineHeight: '64px',
                    padding: '0 24px',
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                }}
            />
        </Dropdown>
    );
}
