import React from 'react';
import './product.css';

const ProductPage = () => {
    return (
        <div className="product-page">
            <h1>productname</h1>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTr5TZ2PNG4h3S4y_-7FIoAXPZA9gUWn24yQ&usqp=CAU'></img>
            <p>product.description</p>
            <h3>product.price</h3>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductPage;
