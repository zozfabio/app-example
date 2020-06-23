import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { LayoutBreadcrumb } from '../../../LayoutConfigurer/store/types';
import { Props } from './types';
import { home } from '../../../../modules/Main/routes';

export default function Breadcrumb({ breadcrumb = [] }: Props): ReactElement {
    return (
        <AntdBreadcrumb style={{ margin: '16px' }}>
            <AntdBreadcrumb.Item>
                <Link to={home.path}>Home</Link>
            </AntdBreadcrumb.Item>
            {breadcrumb.map((item: LayoutBreadcrumb) => (
                <AntdBreadcrumb.Item key={item.path}>
                    <Link to={item.path}>{item.title}</Link>
                </AntdBreadcrumb.Item>
            ))}
        </AntdBreadcrumb>
    );
}
