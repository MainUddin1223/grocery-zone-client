import grocery from '@/assets/grocery.png';
import vegetables from '@/assets/vagetebles.png';
import meat from '@/assets/meat.png';
import personal_care from '@/assets/personal--care.png';
import skin_care from '@/assets/skin-care.png';
import cleaning from '@/assets/cleaning.png';
import fruits from '@/assets/fruits-svgrepo-com.png';
import Image from 'next/image';
import Styles from './OnlineShopping.module.css';
const OnlineShopping = () => {
	return (
		<div className={Styles.container}>
			<h1>Order Now !</h1>
			<p>
				Save your valuable time and make your grocery shopping supper easy.We
				will deliver your ordered item within our time slot. You can choose your
				preferable time slot
			</p>
			<div>
				<h1>Popular Category</h1>
				<div className={Styles.category_container}>
					<div className={Styles.category_item}>
						<Image src={grocery} height={100} width={100} alt="grocery" />
						<p>Grocery</p>
					</div>
					<div className={Styles.category_item}>
						<Image src={vegetables} height={100} width={100} alt="vegetables" />
						<p>Vegetables</p>
					</div>
					<div className={Styles.category_item}>
						<Image src={fruits} height={100} width={100} alt="vegetables" />
						<p>Fresh fruits</p>
					</div>
					<div className={Styles.category_item}>
						<Image src={meat} height={100} width={100} alt="grocery" />
						<p>Meat & Fish</p>
					</div>
					<div className={Styles.category_item}>
						<Image
							src={personal_care}
							height={100}
							width={100}
							alt="personal_care"
						/>
						<p>Personal Care</p>
					</div>
					<div className={Styles.category_item}>
						<Image src={cleaning} height={100} width={100} alt="cleaning" />
						<p>Cleaning</p>
					</div>
					<div className={Styles.category_item}>
						<Image src={skin_care} height={100} width={100} alt="skin_care" />
						<p>Skin Care</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OnlineShopping;
