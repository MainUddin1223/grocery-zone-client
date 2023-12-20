import {
	CreditCardOutlined,
	HomeOutlined,
	TableOutlined,
	ThunderboltOutlined,
	UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import hot_offer from '@/assets/hot.png';
import dhamaka_offer from '@/assets/dhamaka_offer.png';
import grocery from '@/assets/grocery.png';
import vegetables from '@/assets/vagetebles.png';
import meat from '@/assets/meat.png';
import premium from '@/assets/premium.png';
import personal_care from '@/assets/personal--care.png';
import skin_care from '@/assets/skin-care.png';
import cleaning from '@/assets/cleaning.png';
import Image from 'next/image';
export const desktopNavItems = () => {
	const desktopSidebarItems: MenuProps['items'] = [
		{
			label: <Link href={`/product/hot-sales`}>Hot sales</Link>,
			icon: <Image src={hot_offer} alt="hot_offer" width={20} height={20} />,
			key: `/product/hot-sales`,
			style: { border: '1px solid var(--primary-color)' },
		},
		{
			label: <Link href={`/product/dhamaka-offer`}>Dhamaka offer</Link>,
			icon: (
				<Image src={dhamaka_offer} alt="hot_offer" width={20} height={20} />
			),
			key: `/product/dhamaka-offer`,
			style: { border: '1px solid var(--primary-color)' },
		},
		{
			label: <Link href={`/product/grocery-items`}>Grocery items</Link>,
			icon: <Image src={grocery} alt="hot_offer" width={20} height={20} />,
			key: `/product/grocery-items`,
			style: { border: '1px solid var(--primary-color)' },
		},
		{
			label: <Link href={`/product/fresh-vegetables`}>Fresh vegetables</Link>,
			icon: <Image src={vegetables} alt="hot_offer" width={20} height={20} />,
			key: `/product/fresh-vegetables`,
			style: { border: '1px solid var(--primary-color)' },
		},
		{
			label: <Link href={`/product/meat&fish`}>Fresh meat & fish</Link>,
			icon: <Image src={meat} alt="hot_offer" width={20} height={20} />,
			key: `/product/meat&fish`,
			style: { border: '1px solid var(--primary-color)' },
		},
		{
			label: <Link href={`/product/premium-item`}>Premium items</Link>,
			icon: <Image src={premium} alt="hot_offer" width={20} height={20} />,
			key: `/product/premium-item`,
			style: { border: '1px solid var(--primary-color)' },
		},
		{
			label: <Link href={`/product/personal-care`}>Personal care</Link>,
			icon: (
				<Image src={personal_care} alt="hot_offer" width={20} height={20} />
			),
			key: `/product/personal-care`,
			style: { border: '1px solid var(--primary-color)' },
		},
		{
			label: <Link href={`/product/skin-care`}>Skin care</Link>,
			icon: <Image src={skin_care} alt="hot_offer" width={20} height={20} />,
			key: `/product/skin-care`,
			style: { border: '1px solid var(--primary-color)' },
		},
		{
			label: <Link href={`/product/cleaning-items`}>Cleaning items</Link>,
			icon: <Image src={cleaning} alt="hot_offer" width={20} height={20} />,
			key: `/product/cleaning-item`,
			style: { border: '1px solid var(--primary-color)' },
		},
		// {
		// 	label: <Link href={`/${role}/profile`}>Profile</Link>,
		// 	icon: <UserOutlined style={{ fontSize: '21px' }} />,
		// 	key: `/${role}/profile`,
		// 	style: { border: '1px solid var(--primary-color)' },
		// },
	];
	return desktopSidebarItems;
};
