import { createElement, ReactElement } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Props } from './types';

export default function MenuToggle({ maximized, setMaximized }: Props): ReactElement {
    return createElement(maximized ? MenuFoldOutlined : MenuUnfoldOutlined, {
        className: 'trigger',
        onClick: () => setMaximized(!maximized),
    });
}
