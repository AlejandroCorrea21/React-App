import productsDataList from "../Data/Products.json";
import { useParams } from "react-router-dom";



function ItemDetails(props) {
    const parametrosDinamicos = useParams()
    //console.log(parametrosDinamicos)
    const foundProduct = productsDataList.find((cadaProducto) => {
        //console.log(cadaProducto.title)
        if (cadaProducto.title === parametrosDinamicos.product) {
            // console.log("Has entrado en el if")
            return true
        } else {
            return false
        }
    })

    //console.log(foundProduct);
    //console.log(foundProduct.images[0]);
    // console.log(foundProduct.price);
    //console.log(foundProduct.title);
    //console.log(foundProduct.description)
    //console.log(foundProduct.discountPercentage)
    //console.log(foundProduct.reviews)
    //console.log(foundProduct.returnPolicy)
    //console.log(foundProduct.meta)
    //console.log(foundProduct.thumbnail)



    return (
        <>
            <div>
                <img src={foundProduct.images} alt="" style={{ height: 100, width: 100 }} />
                <h2>{foundProduct.title}</h2>
                <p>{foundProduct.description}</p>
                <p>{foundProduct.price}</p>
                <p>{foundProduct.discountPercentage}</p>
                <p>{foundProduct.rating}</p>
                <p>{foundProduct.brand}</p>
                <p>{foundProduct.warrantyInformation}</p>
                {/* <p>{foundProduct.reviews}</p> */}
                <p>{foundProduct.returnPolicy}</p>
                {/*<p>{foundProduct.meta}</p>*/}
                <p>{foundProduct.thumbnail}</p>
            </div>

        </>
    )
}

export default ItemDetails