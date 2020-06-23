import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu as AntdMenu } from 'antd';
import { UserOutlined, VideoCameraOutlined, WarningOutlined } from '@ant-design/icons';
import { nav1, nav2 } from '../../../../modules/Main/routes';
import { Props } from './types';

export default function Menu({ rootLinks, error }: Props): ReactElement {
    const history = useHistory();
    const itens = [];
    if (error) {
        itens.push(
            <AntdMenu.Item danger key="error" icon={<WarningOutlined />}>
                {error.message}
            </AntdMenu.Item>
        );
    } else {
        // todo: check rootLinks and add more itens... Ex:
        itens.push(
            <AntdMenu.Item key="nav1" icon={<UserOutlined />} onClick={() => history.push(nav1.path)}>
                nav 1
            </AntdMenu.Item>
        );
        itens.push(
            <AntdMenu.Item key="nav2" icon={<VideoCameraOutlined />} onClick={() => history.push(nav2.path)}>
                nav 2
            </AntdMenu.Item>
        );
    }
    return (
        <AntdMenu theme="dark" mode="inline">
            {itens}
        </AntdMenu>
    );
}
