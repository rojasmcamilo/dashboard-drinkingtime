import React, { useState, useEffect } from 'react';
import LastProduct from './LastProduct'

function UltimoProducto(){

    const [Ultimo, setUltimo] = useState(0);

    useEffect( ()=> {
        fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(res => {
            let item = res[res.length-1]
            setUltimo(item)
        })

    }, [])

        return(
            <LastProduct

                name = {Ultimo.name}
                detail = {Ultimo.product_detail}
                category ={Ultimo.price}
                id ={Ultimo.id}

            />

        )

}


export default UltimoProducto;