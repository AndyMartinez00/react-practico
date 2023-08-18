import React, { useState, useEffect } from 'react';
import axios from 'axios';




const useGetProducts = (API) => {
    /* llamando la informacion useState*/
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);
    /*useEffect recibe 2 elementos una funcion anonima, un arreglo que escucha los cambios*/
    useEffect(async () => {

        /*const response = await axios(API);
        setProducts(response.data);*/

        /* fetch(API)
       .then((res) => res.json())
       .then((response) => {
         setProducts(response);
         setIsLoading(false);
 
       });*/
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        try {
            const response = await axios(API, { cancelToken: source.token });

            if (response) {
                setProducts(response.data);              
               
            }
        } catch (err) {
            if (axios.isCancel(err)) {
                return 'axios request cancelled';
            }
            setError(err.message);
            console.log('Error: ', err);
        }finally{
            setIsLoading(false);
        }



    }, []);

    //revisar que tenga objetos 
    if (products) {
        //oredenamos el array de objetos por titulo
        products.sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });


        /*products.forEach((e) => {
            console.log(`${e.id} ${e.title} ${e.price} ${e.images[0]}`);
        });*/


    }

    return( {
        products,isLoading,error
    });
}

export default useGetProducts;