import Styles from './Home.module.css';

import vegetables from '@/assets/vegetables.png';
import potato from '@/assets/potato.png';
import onion from '@/assets/onion.png';
import mashroom from '@/assets/mashroom.png';
import broccoli from '@/assets/broccoli.png';
import Image from 'next/image';
const Home = () => {
	return (
		<div className={Styles.container}>
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
				<h1>hello</h1>
			</div>
			<div>
				<h1>hello</h1>
			</div>
		</div>
	);
};
export default Home;
