import { useState } from "react";
import ProductsDataList from "./Data/Products.json";

function ProductList() {
    const [sellingProducts, setSellingProducts] = useState(ProductsDataList);

    const handleRemoveProducts = (indiceDelete) => {
        const clone = sellingProducts.slice(0)

        clone.splice(indiceDelete, 1)
        setSellingProducts(clone)

    }


    return (
        <>


            <h1 style={{ textAlign: "center", color: "black" }} >Lista de productos</h1>

            <section style={{ textAlign: "center", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-evenly", border: "solid black", marginLeft: 450, width: 1000, color: "black" }}>
                {sellingProducts.map((eachProduct, indice) => {
                    return (

                        <div key={eachProduct.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", border: "solid", margin: 20, width: 400, flexWrap: "wrap", borderRadius: "20px" }}>
                            <img src={eachProduct.images} alt="" style={{ width: "100px", height: "100px", margin: 10, width: 100 }} />
                            <h2>{eachProduct.title}</h2>
                            <p>{eachProduct.description}</p>
                            <p>{eachProduct.price}</p>

                            {eachProduct.stock > 0 ? (
                                <p>Stock disponible ✅ {eachProduct.stock}</p>
                            ) : (
                                <p>Producto Agotado ❌</p>

                            )}
                            <button onClick={() => handleRemoveProducts(indice)}>Delete</button>
                        </div>
                    );
                })}
            </section>
        </>
    );
}

export default ProductList