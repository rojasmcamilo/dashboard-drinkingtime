import React, {useState, useEffect} from 'react';

function Categorias(){

    const [Cats, setCats] = useState([])

    useEffect(()=>{buscarCats()}, [])

    const buscarCats = () => {
        fetch("http://localhost:3000/api/categories")
        .then(res => res.json())
        .then(res => {
            setCats(res)
        })
        .catch(e =>
             {console.log(e);})
    }

    return (
        <>
        {
            Cats.map((cats, n)=>{
                return(
                    <div className="row">
                      <div key={n} className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">
                              <a style={{color:"cornsilk"}} href={"http://localhost:3000/categories/" + cats.name} > {cats.name}</a>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                )
            })
        }
        </>
    )

}

export default Categorias