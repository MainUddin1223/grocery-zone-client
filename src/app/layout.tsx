import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DesktopNavbar from '@/components/navbar/DesktopNavbar/DesktopNavbar';
import { ConfigProvider } from 'antd';
import Providers from '@/lib/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Providers>
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
				<html lang="en">
					<body className={inter.className}>{children}</body>
				</html>
			</ConfigProvider>
		</Providers>
	);
}
