import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts';


const API = 'https://api.escuelajs.co/api/v1/products';
/* useEfecct permite hacer llammado a la api y transmitirlo anuestro componente */

const ProductList = () => {
	//llmando la funcion getProductos
	const products = useGetProducts(API);
	
	return (
		<section className="main-container">
			<div className="ProductList">
			{products.map(product => (
					<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;
