import React, { useState, useEffect } from 'react';
import LastProduct from './LastProduct'

function UltimoProducto(){

    const [Prod, setProd] = useState(0);

    useEffect( ()=> {
        fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(res => {
            let item = res[res.length-1]
            setProd(item)
        })

    }, [])

        return(
            <LastProduct

                name = {Prod.name}
                detail = {Prod.product_detail}
                category ={Prod.price}
                id ={Prod.id}
                image={Prod.image}

            />

        )

}


export default UltimoProducto;