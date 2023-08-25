import React, { useState,useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/Header.scss';
import MenuComp from '@components/Menu';
import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import icon from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	/*--form1 *
	const { state } = useContext(AppContext);
	*/
	/*--forma2 --*/
	const {state:{cart}}=useContext(AppContext);

	const handleToggle = () => {
		/*cambia de false a true*/ 
		setToggle(!toggle)
	};
	

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
					<li className="navbar-shopping-cart">
						<img src={icon} alt="shopping cart" />
						{/*state.cart.length > 0 ? <div>{state.cart.length}</div> : null*/}
						{/*cart.length > 0 ? <div>{cart.length}</div> : null*/}
						<div>{cart.length > 9 ? `+9` : cart.length || 0}</div>
					</li>
				</ul>
			</div>
			{/* vaidacion que si toggle es false no se muestra, si toggle es true si se   */}
			{toggle && <MenuComp/> }			
		</nav>
	);
}

export default Header;
