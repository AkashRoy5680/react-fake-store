import React from 'react';
import ReactModal from '../../../ReactModal/ReactModal';
import "./Singleproduct.css"
const Singleproduct = ({product,setCount}) => {
    //console.log(props)
    return (
        <div  className='col-md-4'>
           <div className="card p-2 border-3">
            <img className='w-50 m-auto' src={product.image} alt="" />
           <p>{product.title.slice(0,17)}</p> 
           <div className="d-flex justify-content-around">
           <button onClick={setCount} className='btn btn-warning'>Add to Cart</button>
           <button className='btn btn-danger'>Delete</button>
           <ReactModal product={product}></ReactModal>
           </div>
           </div>
        </div>
    );
};

export default Singleproduct;