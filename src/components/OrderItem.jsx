import React,{ useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';
import icon from '@icons/icon_close.png';

const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);
	/* desestructuracion del objeto*/
	const { id, title, price, images } = product;
	/*evento que llama para eliminar un elemento de arreglo producto */
	const handleRemove = product => {
		removeFromCart(product);
	}

	
	return (
		<div className="OrderItem">
			<figure>
				<img src={images[0]} alt="bike" />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			{/*vevento eliminar */}
			<img src={icon} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
