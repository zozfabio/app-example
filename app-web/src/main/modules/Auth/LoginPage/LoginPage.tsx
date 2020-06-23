import React, { ReactElement } from 'react';
import { Alert, Button, Card, Col, Form, Input, Row } from 'antd';
import { Rule } from 'antd/lib/form';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginInput } from '../../../services/auth/types';
import { Props } from './types';
import './styles.css';

const inicialValues: LoginInput = {
    username: 'user@mail.com',
    password: 'userpass',
};

const rules = {
    username: [{ required: true, message: 'Por favor, informe o E-Mail!' }] as Rule[],
    password: [{ required: true, message: 'Por favor, informe a Senha!' }] as Rule[],
};

export default function LoginPage({ login, error }: Props): ReactElement {
    const onSubmit: any = (input: LoginInput): void => {
        login(input);
    };
    return (
        <Row id="component-auth-login-page" justify="center">
            <Col xs={20} sm={16} md={12} lg={8} xl={6}>
                <Card title="Entrar">
                    {error && <Alert message={error.message} type="error" showIcon />}
                    <Form initialValues={inicialValues} onFinish={onSubmit}>
                        <Form.Item name="username" rules={rules.username}>
                            <Input prefix={<UserOutlined />} placeholder="E-Mail" />
                        </Form.Item>
                        <Form.Item name="password" rules={rules.password}>
                            <Input prefix={<LockOutlined />} type="password" placeholder="Senha" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Entrar
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
}
