
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

function ItemDetails(props) {


    const parametrosDinamicos = useParams()
    console.log(parametrosDinamicos.product)
    // Los parametrosdinamicos son las partes de la URL que pueden cambiar según nuestra conveniencia.

    const foundProduct = props.allProducts.find((cadaProducto) => {
        // el .find busca un elemento que cumpla 1 condición.
        console.log(cadaProducto.id)
        //console.log(parametrosDinamicos.product)

        if (cadaProducto.id === parseInt(parametrosDinamicos.product)) {
            console.log("Has entrado en el if")
            // en productdatalist no está lo que tenemos que buscar.
            return true
        } else {
            console.log("error")
            return false
        }


        // Nos interesa que los parametros dinámicos (1 2 3 4.. )  para que podamos pintar el elemento que queramos. 
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
    console.log(props.allProducts)


    return (
        <>
            <div style={{ color: "black", textAlign: "center", borderRadius: " 20px" }}>
                {/* <img src={foundProduct.images} alt="" style={{ height: 100, width: 100 }} /> */}
                <h2>Product: {foundProduct.title}</h2>
                <p>Description: {foundProduct.description}</p>
                <p>Price: {foundProduct.price} €</p>
                <p>Percentage: {foundProduct.discountPercentage} %</p>
                <p>Rating: {foundProduct.rating}</p>
                <p>Brand: {foundProduct.brand}</p>
                <p>Warranty: {foundProduct.warrantyInformation}</p>
                {foundProduct.reviews && foundProduct.reviews.length > 0 ? (
                    <>
                        {/*Condicional por si no encuentra información */}


                        <h3>Reviews:</h3>
                        {foundProduct.reviews.map((review, index) => (
                            <div key={index} style={{ marginBottom: "10px" }}>
                                <p>Rating: {review.rating || "No rating available"}</p>
                                <p>Comment: {review.comment || "No comment available"}</p>
                                <p>Date: {new Date(review.date).toLocaleDateString() || "No date available"}</p>
                                <p>Reviewer Name: {review.reviewerName || "No reviewer name available"}</p>
                                <p>Reviewer Email: {review.reviewerEmail || "No reviewer email available"}</p>
                            </div>
                        ))}
                    </>
                ) : (

                    <p>No reviews available for this product.</p>
                )}
                <p>Return Policy: {foundProduct.returnPolicy}</p>
                <p>Created at: {foundProduct.createdAt}</p>
                <p>Updated at: {foundProduct.updatedAt}</p>
                <p>Barcode: {foundProduct.barcode}</p>

                <p>QR Code: <img src={foundProduct.qrCode} alt="QR Code" style={{ width: 100, height: 100 }} /></p>
                <p>Thumbnail: <img src={foundProduct.thumbnail} alt="Thumbnail" style={{ width: 100, height: 100 }} /></p>

                <Link to={`/edit/${foundProduct.id}`} style={{ color: "green", textDecoration: "none" }}>
                    <button style={{ height: 50, width: 90, fontSize: "18px" }}>Edit</button>
                </Link>

            </div>
        </>
    );
}

export default ItemDetails;