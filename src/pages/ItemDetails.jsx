import productsDataList from "../ProductList";

import { useParams } from "react-router-dom";



function ItemDetails(props){
const parametrosDinamicos = useParams()

const foundProduct = productsDataList.find( (cadaProducto) => {
    if(cadaProducto.title === parametrosDinamicos.title){
        return true
    } else {
        return false
    }
})


    return(
        <>
         <div>
         <img src={props.foundProduct.images} alt=""  /> 
            <h2>{props.foundProduct.title}</h2>
            <p>{props.foundProduct.description}</p>
            <p>{props.foundProduct.price}</p>
            <p>{props.foundProduct.discountPercentage}</p>
            <p>{props.foundProduct.rating}</p>
            <p>{props.foundProduct.brand}</p>
            <p>{props.foundProduct.warrantyInformation}</p>
            <p>{props.foundProduct.reviews}</p>
            <p>{props.foundProduct.returnPolicy}</p>
            <p>{props.foundProduct.meta}</p>
            <p>{props.foundProduct.thumbnail}</p>

        </div>
        
        </>
    )
}

export default ItemDetails