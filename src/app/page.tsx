import Image from 'next/image';
import styles from './page.module.css';
import DesktopNavbar from '@/components/navbar/DesktopNavbar/DesktopNavbar';
import { ConfigProvider } from 'antd';

export default function Home() {
	return (
		<ConfigProvider
			theme={{
				components: {
					Layout: {
						siderBg: 'white',
						triggerBg: 'var(--brand-color)',
					},
				},
				token: {
					colorPrimary: '#ff686e',
					borderRadius: 3,
				},
			}}
		>
			<DesktopNavbar />
		</ConfigProvider>
	);
}
