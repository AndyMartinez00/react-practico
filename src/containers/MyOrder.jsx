import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import icon from '@icons/flechita.svg';

const MyOrder = () => {
	/*constante que trae el estado */
	const { state } = useContext(AppContext);
	/*funcion que totaliza*/
	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={icon} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{/*iterando los productos con key literals*/}
				{state.cart.map(product => (
						<OrderItem product={product} key={`orderItem-${product.id}`} />
					))}			
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>{sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
