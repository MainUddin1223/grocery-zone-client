import Styles from './Home.module.css';

import vegetables from '@/assets/vegetables.png';
import potato from '@/assets/potato.png';
import onion from '@/assets/onion.png';
import mashroom from '@/assets/mashroom.png';
import broccoli from '@/assets/broccoli.png';
import cover from '@/assets/cover.png';
import Image from 'next/image';
import save_money from '@/assets/save-money.png';
import { Col, Row } from 'antd';
const Home = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.hero_section}>
				<div className={Styles.flex_item}>
					<Image
						src={vegetables}
						width={50}
						height={50}
						alt="vegetables"
						style={{
							position: 'absolute',
							bottom: '20%',
							left: '15%',
							rotate: '-25deg',
							opacity: '.5',
						}}
					/>
					<Image
						src={potato}
						width={50}
						height={50}
						alt="potato"
						style={{
							position: 'absolute',
							top: '62px',
							left: '35%',
							rotate: '-95deg',
							opacity: '.5',
						}}
					/>
					<Image
						src={onion}
						width={50}
						height={50}
						alt="onion"
						style={{
							position: 'absolute',
							top: '30px',
							right: '75px',
							rotate: '-95deg',
							opacity: '.5',
						}}
					/>
					<Image
						src={mashroom}
						width={50}
						height={50}
						alt="mashroom"
						style={{
							position: 'absolute',
							top: '50%',
							left: '65%',
							rotate: '-35deg',
							opacity: '.5',
						}}
					/>
					<Image
						src={broccoli}
						width={50}
						height={50}
						alt="broccoli"
						style={{
							position: 'absolute',
							top: '30px',
							left: '25px',
							rotate: '-95deg',
						}}
					/>
					<div
						style={{
							position: 'absolute',
							zIndex: '9',
							top: '50%',
							transform: 'translateY(-50%)',
							margin: '0 5%',
						}}
					>
						<h1>
							Save your time and Get fresh daily commodities without any hassle
						</h1>
					</div>
				</div>
				<div>
					<div>
						<Image
							src={cover}
							alt="cover"
							width={100}
							height={100}
							layout="responsive"
						/>
					</div>
				</div>
			</div>
			<div className={Styles.tag_container}>
				<Row>
					<Col md={12}>
						<div className={Styles.tag_item}>
							<Image src={save_money} alt="save_money" width={30} height={30} />
							<p>Get exclusive offer & save money</p>
						</div>
					</Col>
					<Col md={12}>
						<div className={Styles.tag_item}>
							<Image src={save_money} alt="save_money" width={30} height={30} />
							<p>Get exclusive offer & save money</p>
						</div>
					</Col>
					<Col md={12}>
						<div className={Styles.tag_item}>
							<Image src={save_money} alt="save_money" width={30} height={30} />
							<p>Get exclusive offer & save money</p>
						</div>
					</Col>
					<Col md={12}>
						<div className={Styles.tag_item}>
							<Image src={save_money} alt="save_money" width={30} height={30} />
							<p>Get exclusive offer & save money</p>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};
export default Home;
