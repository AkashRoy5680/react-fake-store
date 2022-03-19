import React, { useEffect, useState } from 'react';
import "./Allproduct.css"
import Singleproduct from './SingleProduct/Singleproduct';
const Allproduct = ({setCount}) => {
    const[products,setProducts]=useState([])
    useEffect( ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
    }
    ,[])
    //console.log(products)
    return (
        <div>
            <h1>All Products</h1>
            <div className="row container">
            {
                products.map(product=> <Singleproduct setCount={setCount} key={product.id} product={product}></Singleproduct>)
            }
            </div>
        </div>
    );
};

export default Allproduct;