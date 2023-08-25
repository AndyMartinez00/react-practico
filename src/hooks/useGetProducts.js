import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '@logos/santaClaus.png';

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

            //objetos necesarios
            var product1 = {
                "data": [{
                    id: 1,
                    title: "Ford",
                    price: 120.23,
                    images: [logo,
                        "https://source.unsplash.com/random/200x200?sig=2",
                        "https://source.unsplash.com/random/200x200?sig=3"]
                },
                {
                    id: 2,
                    title: "Tierra",
                    price: 120.23,
                    images: ["https://source.unsplash.com/random/200x200?sig=1",
                        "https://source.unsplash.com/random/200x200?sig=2",
                        "https://source.unsplash.com/random/200x200?sig=3"]
                },
                {
                    id: 3,
                    title: "Algo",
                    price: 120.23,
                    images: ["https://source.unsplash.com/random/200x200?sig=2",
                        "https://source.unsplash.com/random/200x200?sig=2",
                        "https://source.unsplash.com/random/200x200?sig=3"]

                },
                {
                    id: 4,
                    title: "Bueno",
                    price: 120.23,
                    images: ["https://source.unsplash.com/random/200x200?sig=3",
                        "https://source.unsplash.com/random/200x200?sig=2",
                        "https://source.unsplash.com/random/200x200?sig=3"]
                },
                {
                    id: 5,
                    title: "Vida",
                    price: 120.23,
                    images: ["https://source.unsplash.com/random/200x200?sig=4",
                        "https://source.unsplash.com/random/200x200?sig=2",
                        "https://source.unsplash.com/random/200x200?sig=3"]
                }

                ]
            }

            console.log(product1.data);
            setProducts(product1.data);



        } finally {
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

    return ({
        products, isLoading, error
    });
}

export default useGetProducts;