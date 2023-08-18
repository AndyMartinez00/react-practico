import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts';


const API = 'https://api.escuelajs.co/api/v1/products';
/* useEfecct permite hacer llammado a la api y transmitirlo anuestro componente */

const ProductList = () => {
	//llmando la funcion getProductos
	const {products,isLoading,error } = useGetProducts(API);
	
	return (
		<section className="main-container">
			<div className="ProductList grid grid-cols-[repeat(auto-fill,140px)] md:grid-cols-[repeat(auto-fill,240px)] gap-[26px] place-content-center m-[3em_0_0_0]">
			{isLoading && <div>Loading...</div>}
			{error && <div>Error: {error}</div>}	
			{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
