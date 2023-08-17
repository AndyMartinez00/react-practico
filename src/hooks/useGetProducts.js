import React,{useState, useEffect} from 'react';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';


const useGetProducts = () => {
    /* llamando la informacion useState*/
	const [products, setProducts] = useState([]);	
    const [isLoading, setIsLoading] = useState(true);
	/*useEffect recibe 2 elementos una funcion anonima, un arreglo que escucha los cambios*/
	useEffect(async () => {
        
		const response = await axios(API);
		setProducts(response.data);

       /* fetch(API)
      .then((res) => res.json())
      .then((response) => {
        setProducts(response);
        setIsLoading(false);

      });*/

	}, [])

    return (     
     products
    );
}

export default useGetProducts;