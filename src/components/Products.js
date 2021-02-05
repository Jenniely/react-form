import React from "react";
import ProductItem from "./ProductItem";


const Products = ({sampleProducts}) => {



  return (
    <div className="products">
      {sampleProducts.map(p =>
        <ProductItem key={p.id} item={p}/>
      )}
    </div>
  )
}

export default Products;