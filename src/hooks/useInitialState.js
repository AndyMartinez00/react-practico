import React,{useState} from 'react';

//constante valor inicial base
const initialState = {
    cart:[],
}

const useInitialState = () => {
    //inicializando estado 
    const [state, setState] = useState(initialState);

    //funcion que añade producto al elementos al arreglo
    //payload nombre default 
    const addToCart = (payload) => {
		setState({
            //mentiene el estado 
			...state,
            //añadimos elemento producto 
			cart: [...state.cart, payload]
		});
	};
    //funcion que elimina producto al elemento al arreglo
    //payload nombre default
    const removeFromCart = (payload) => {
		setState({
             //mentiene el estado
			...state,
             //eliminamos elemento producto 
			cart: state.cart.filter(items => items.id !== payload.id),
		});
	}

    return ({
        state,
		addToCart,
        removeFromCart,
    });
}

export default useInitialState;