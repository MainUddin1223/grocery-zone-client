'use client'
import { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { desktopNavItems } from '../navItems/navItems';
const { Header, Content, Sider } = Layout;
import Styles from './DesktopNavbar.module.css'



const DesktopNavbar = () => {
       const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
      <div>
          <Layout style={{ minHeight: '100vh',display:'flex',flexDirection:'column' }}>
          <h1 className={Styles.test}>hello</h1>
              <div style={{display:"flex"}}>
                  <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={desktopNavItems()} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
                                  backgroundColor: 'var(--brand-color)',
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
      </Layout>
      </div>
    </Layout>
   
      </div>
  )
}

export default DesktopNavbar