import ProductList from "../ProductList";
import { useState } from "react";



function ItemDetails(){
    const [sellingProducts, setSellingProducts] = useState(ProductsDataList);
    return(
        <>
        {sellingProducts.map((eachProduct, indice) => {
            return (
         <div>
         <img src={eachProduct.images} alt=""  /> 
            <h2>{eachProduct.title}</h2>
            <p>{eachProduct.description}</p>
            <p>{eachProduct.price}</p>
            <p>{eachProduct.discountPercentage}</p>
            <p>{eachProduct.rating}</p>
            <p>{eachProduct.brand}</p>
            <p>{eachProduct.warrantyInformation}</p>
            <p>{eachProduct.reviews}</p>
            <p>{eachProduct.returnPolicy}</p>
            <p>{eachProduct.meta}</p>
            <p>{eachProduct.thumbnail}</p>

        </div>
        )

    })}
        </>
    )
}

export default ItemDetails