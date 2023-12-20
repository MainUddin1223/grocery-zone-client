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
				style={{
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden',
				}}
			>
				<DesktopHeader />
				<div style={{ display: 'flex' }}>
					<Sider
						collapsible
						width={280}
						collapsed={collapsed}
						onCollapse={(value) => setCollapsed(value)}
					>
						<div />

						<Menu
							style={{ padding: '0 10px' }}
							defaultSelectedKeys={['1']}
							mode="inline"
							items={desktopNavItems()}
						/>
					</Sider>
					<Layout>
						<div style={{ height: '89vh', overflowY: 'scroll' }}>
							{children}
						</div>
					</Layout>
				</div>
			</Layout>
		</div>
	);
};

export default DesktopNavbar;
