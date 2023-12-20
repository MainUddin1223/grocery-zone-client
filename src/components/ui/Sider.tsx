'use client';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { desktopNavItems } from '../navbar/navItems/navItems';

const SideBar = () => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<div>
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
			</div>
		</div>
	);
};

export default SideBar;
