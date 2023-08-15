import React, {useState} from 'react';
import '@styles/ProductItem.scss';
import icon from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
	/*manejando hooks estado o ciclo de vida*/
	/*dos valores 1-estado 2-funcion modificadora ,  */
	const [cart, setCart] = useState('Hi5'); /*string,boleano,objeto,array*/
	/*evento que desencadena el mejo de un elemento dentro del estado  */
	const handleClick =()=>{
		setCart('Hi5 World');
	}

	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleClick} >
					<img src={icon} alt="" />
				</figure>
				{cart}
			</div>
		</div>
	);
}

export default ProductItem;
