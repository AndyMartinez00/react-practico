import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import icon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	/* desestructuracion del objeto*/
	const { id, title, price, images } = product;
	/*manejando hooks estado o ciclo de vida*/
	/*dos valores 1-estado 2-funcion modificadora ,  */
	const [cart, setCart] = useState([]); /*string,boleano,objeto,array*/
	/*evento que desencadena el mejo de un elemento dentro del estado  */
	const handleClick = () => {
		setCart([]);
	}

	return (
		<div className="ProductItem">
			<h1>{id}</h1>
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>{new Intl.NumberFormat('en-US',
						{
							style: 'currency',
							currency: 'USD'
						}
					).format(product.price)}</p>
					<p>{title}</p>
				</div>
				<figure onClick={handleClick} >
					<img src={icon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
