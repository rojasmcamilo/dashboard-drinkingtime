import React, { useEffect } from 'react';
import LastProduct from './LastProduct'

function UltimoProducto(){

    const [Producto, setProducto] = useState(0);

    useEffect( ()=> {
        fetch("http://localhost:3000/api/products")
        .then(res => res.json()
        console.log(res) )
        .res(data=>{
            let ultimo = data[data.lenght-1]
            setProducto(ultimo)
        })
    }, [])

        return(
            <LastProduct

                name = {Producto.name}
                detail = {Producto.product_detail}
                category ={Producto.price}

            />

        )

}


export default LastProduct;