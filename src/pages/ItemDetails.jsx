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
        // if(foundProduct === null){
        //     return
        // }
        //RECORDATORIO clausula de  guardia!

    })

    //console.log(foundProduct);
    //console.log(foundProduct.images[0]);
    // console.log(foundProduct.price);
    //console.log(foundProduct.title);
    //console.log(foundProduct.description)
    //console.log(foundProduct.discountPercentage)
    //console.log(foundProduct.reviews)
    //console.log(foundProduct.returnPolicy)
    //console.log(foundProduct.thumbnail)

    return (
        <>
            <div style={{ color: "black" }}>
                <img src={foundProduct.images} alt="" style={{ height: 100, width: 100 }} />
                <h2>Product: {foundProduct.title}</h2>
                <p>Description: {foundProduct.description}</p>
                <p>Price: {foundProduct.price} €</p>
                <p>Percentage: {foundProduct.discountPercentage} %</p>
                <p>Rating: {foundProduct.rating}</p>
                <p>Brand: {foundProduct.brand}</p>
                <p>Warranty: {foundProduct.warrantyInformation}</p>
                <p>Rating reviews: {foundProduct.reviews.rating}</p>
                <p>Comment: {foundProduct.reviews.comment}</p>
                <p>Date: {foundProduct.reviews.date}</p>
                <p>Reviewer Name: {foundProduct.reviews.reviewerName}</p>
                <p>Reviewer Email: {foundProduct.reviews.reviewerEmail}</p>
                <p>Return Policy: {foundProduct.returnPolicy}</p>
                <p>Created at: {foundProduct.meta.createdAt}</p>
                <p>Updated at: {foundProduct.meta.updatedAt}</p>
                <p>Barcode: {foundProduct.meta.barcode}</p>

                <p>QR Code: <img src={foundProduct.meta.qrCode} alt="QR Code" style={{ width: 100, height: 100 }} /></p>
                <p>Thumbnail: <img src={foundProduct.thumbnail} alt="Thumbnail" style={{ width: 100, height: 100 }} /></p>
            </div>
        </>
    );
}

export default ItemDetails;