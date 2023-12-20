'use client';
import Home from '@/components/Home/Home';
import DesktopNavbar from '@/components/navbar/DesktopNavbar/DesktopNavbar';
import React from 'react';

const page = () => {
	return (
		<div>
			<DesktopNavbar>
				<Home />
			</DesktopNavbar>
		</div>
	);
};

export default page;
