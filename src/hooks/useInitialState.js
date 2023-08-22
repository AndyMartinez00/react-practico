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

    return (
        state,
		addToCart
        
    );
}

export default useInitialState;