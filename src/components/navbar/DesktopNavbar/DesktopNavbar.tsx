'use client';
import { ReactNode, useState } from 'react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { desktopNavItems } from '../navItems/navItems';
const { Header, Content, Sider } = Layout;
import Styles from './DesktopNavbar.module.css';
import DesktopHeader from './DesktopHeader';

const DesktopNavbar = ({ children }: { children: ReactNode }) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div>
			<Layout
				style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
			>
				<DesktopHeader />
				<div style={{ display: 'flex' }}>
					<Sider
						collapsible
						collapsed={collapsed}
						onCollapse={(value) => setCollapsed(value)}
					>
						<div className="demo-logo-vertical" />
						<Menu
							defaultSelectedKeys={['1']}
							mode="inline"
							items={desktopNavItems()}
						/>
					</Sider>
					<Layout>{children}</Layout>
				</div>
			</Layout>
		</div>
	);
};

export default DesktopNavbar;
