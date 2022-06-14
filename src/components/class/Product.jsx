import React, { useState, useEffect, Fragment } from 'react';
import { useParams, } from 'react-router-dom';
import { data } from '../data';

function Product() {
  const params = useParams()
  const [product, setProduct] = useState(null)


  useEffect(() => {
    const currentProduct = data.filter((item) => item.title === params.title)
    setProduct(currentProduct)


  }, [])

  console.log(product)
  return (
    <div>
      <ul>
        {
          product && product.map((item, index) => (
            <Fragment key={index}>
              <li>{<h1>Hello welcome to the{item.title} product page</h1>}</li>
              <li>{item.title}</li>
              <li>{item.description}</li>

            </Fragment>
          ))
        }
      </ul>

    </div>
  );
}

export default Product;
