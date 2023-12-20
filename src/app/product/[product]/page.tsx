type ProductProps = {
	params: any;
};

const Product = ({ params }: ProductProps) => {
	return <div>{params.product}</div>;
};

export default Product;
