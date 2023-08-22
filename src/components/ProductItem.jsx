import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';
import icon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	/* desestructuracion del objeto*/
	const { id, title, price, images } = product;
	/* llamamos [funcion,estado] de useContext  */			
	const {addToCart} = useContext(AppContext);
	/*evento que desencadena el mejo de un elemento dentro del estado  */
	const handleClick = (item) => {
		//mandamos el objeto producto useInitialState
		addToCart(item);
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
				<figure onClick={() => handleClick(product)} >
					<img src={icon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
