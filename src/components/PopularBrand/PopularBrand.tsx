import { brands } from '@/utils/brand';
import Image from 'next/image';

const PopularBrand = () => {
	return (
		<div>
			<h1>Popular on Grocery Mart</h1>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '15px',
				}}
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
