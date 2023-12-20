'use client';
import Styles from './DesktopNavbar.module.css';
import Search from 'antd/es/input/Search';
import { Button, Radio } from 'antd';
import Link from 'next/link';

const DesktopHeader = () => {
	const handleSearch = (value: string) => {
		console.log(value);
	};
	return (
		<div className={Styles.desktop_header_container}>
			<div className={Styles.header}>
				<div>
					<Link href="/">
						<h1>Grocery mart</h1>
					</Link>
				</div>
				<div style={{ width: '50%' }}>
					<Search
						placeholder="input search text"
						allowClear
						enterButton="Search"
						size="large"
						onSearch={handleSearch}
						style={{ width: '100%' }}
					/>
				</div>
				<div className={Styles.button_group}>
					<div>
						<Radio.Group>
							<Radio.Button value="large">Eng</Radio.Button>
							<Radio.Button value="small">বাং</Radio.Button>
						</Radio.Group>
					</div>
					<div>
						<Button type="primary">Login</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DesktopHeader;
