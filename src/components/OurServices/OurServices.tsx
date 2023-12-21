import { services } from '@/utils/services';
import { Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react';

const OurServices = () => {
	return (
		<div>
			<h1>Our Services</h1>
			<Row>
				{services.map((service, i: number) => (
					<Col key={i} lg={6} xs={12}>
						<h1>{service.title}</h1>
						<p>{service.details}</p>
						<Image
							src={service.img}
							alt="service"
							width={100}
							layout="responsive"
						/>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default OurServices;
