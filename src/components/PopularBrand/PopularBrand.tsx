import { brands } from '@/utils/brand';
import Image from 'next/image';
import Styles from './PopulerBrand.module.css'

const PopularBrand = () => {
	return (
		<div className={Styles.container}>
			<h1>Popular on Grocery Mart</h1>
			<div className={Styles.brand_container}
			>
				{brands.map((brand) => (
					<div key={brand.id}>
						<Image src={brand.img} width={100} alt={brand.alt} />
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularBrand;
