import DesktopNavbar from '@/components/navbar/DesktopNavbar/DesktopNavbar';

type ProductProps = {
	params: any;
};

const Product = ({ params }: ProductProps) => {
	return (
		<DesktopNavbar>
			<div>{params.product}</div>
		</DesktopNavbar>
	);
};

export default Product;
