import { services } from '@/utils/services';
import { Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react';
import Styles from './OurService.module.css'

const OurServices = () => {
	return (
		<div className={Styles.container}>
			<h1 className={Styles.service_header}>Our Services</h1>
			<Row gutter={[25,25]}>
				{services.map((service, i: number) => (
					<Col key={i} lg={6} xs={12} >
						<div className={Styles.service_item}>
							<h2>{service.title}</h2>
						<p>{service.details}</p>
						<Image
							src={service.img}
							alt="service"
							width={100}
							layout="responsive"
						/>
						</div>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default OurServices;
