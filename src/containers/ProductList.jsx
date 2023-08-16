import React, {useEffect, useState} from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';
/* useEfecct permite hacer llammado a la api y transmitirlo anuestro componente */

const ProductList = () => {
	/* llamando la informacion useState*/
	const [products, setProducts] = useState([]);	
	/*useEffect recibe 2 elementos una funcion anonima, un arreglo que escucha los cambios*/
	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, [])

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
