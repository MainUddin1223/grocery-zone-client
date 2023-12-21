'use client';
import FindUs from '@/components/FindUs/FindUs';
import Home from '@/components/Home/Home';
import OnlineShopping from '@/components/OnlineShopping/OnlineShopping';
import DesktopNavbar from '@/components/navbar/DesktopNavbar/DesktopNavbar';
import React from 'react';

const page = () => {
	return (
		<div>
			<DesktopNavbar>
				<Home />
				<FindUs />
				<OnlineShopping />
			</DesktopNavbar>
		</div>
	);
};

export default page;
