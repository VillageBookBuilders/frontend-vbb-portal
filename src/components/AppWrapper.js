import React from 'react';
// import 'antd/dist/antd.css';
import { Layout, Button, PageHeader, Breadcrumb } from 'antd';
import { LoginOutlined, FormOutlined } from '@ant-design/icons';
import fullLogo from '../images/vbb-full-logo.png';

function AppWrapper(props) {
    const { Footer, Content } = Layout;

    return (
        <div>
            <Layout>
                <PageHeader
                    style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#549bea', padding: '25px', borderBottom: ' 10px solid #ff914d'}}
                    title={<img
                        src={fullLogo}
                        alt="VBB logo"
                        width="100"
                    ></img>}
                    extra={[
                        <Button key="1" href='/signin'>Sign In<LoginOutlined /></Button>,
                        <Button key="2" href='/signup' type='primary' style={{ backgroundColor: '#ff914d' }}>Register<FormOutlined /></Button>,
                    ]}
                >
                </PageHeader>
                <Content className="site-layout" style={{ padding: '50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><a href='/'>VBB Portal</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href='/signup'>Mentor Registration</a></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: '#549bea', color: 'white', padding: '25px' }}>Village Book Builders ©2021 | All Rights Reserved</Footer>
            </Layout>
        </div>
    );
}
export default AppWrapper;
