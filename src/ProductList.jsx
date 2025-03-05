import { useState } from "react";
import { Link } from "react-router-dom";
import ItemDetails from "./pages/ItemDetails";
import AddForm from "./components/AddForm";

function ProductList(props) {

    const handleRemoveProducts = (indiceDelete) => {

        const clone = props.allProducts.slice(0)

        clone.splice(indiceDelete, 1)
        props.setAllProducts(clone)

    }
    // const handleAddProducts = (indiceAdd) => {
    //     const clone = props.allProducts.slice(0)
    //     props.setAllProducts(clone)
    // }

    return (
        <>


            <h1 style={{ textAlign: "center", color: "black" }} >Lista de productos</h1>

            <div style={{ display: "flex", flexDirection: "column", textAlign: "center", color: "black" }}>
                {/* <           AddForm allProducts={allProducts} setAllProducts={setAllProducts} /> */}
                <Link to="/add-product">Añadir producto</Link>
            </div>

            <section style={{ display: "flex", flexWrap: "wrap", textAlign: "center", border: "solid black", margin: "auto", width: 1300, color: "black", alignItems: "center", justifyContent: "center", borderRadius: " 20px" }}>

                {props.allProducts.map((eachProduct, indice) => {
                    return (


                        <div key={eachProduct.id} style={{
                            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", border: "solid", margin: 20, width: 300, height: 500, flexWrap: "wrap", borderRadius: "20px",

                        }}>

                            {/* <ItemDetails key={indice} eachProduct={eachProduct}/>
                         */}
                            <img src={eachProduct.images} alt="" style={{ width: 300, height: 100, margin: 10, width: 100 }} />

                            <Link to={`/details/${eachProduct.title}`} style={{ color: "#57C5FA" }}><h2>{eachProduct.title}</h2></Link>

                            <p>Category: {eachProduct.category}</p>
                            <p>Price: {eachProduct.price}</p>

                            {eachProduct.stock > 0 ? (
                                <p>Stock disponible ✅ {eachProduct.stock}</p>
                            ) : (
                                <p>Producto Agotado ❌</p>

                            )}

                            <br />

                            <button onClick={() => handleRemoveProducts(indice)} style={{ height: 50, width: 90, fontSize: "18px", }} >Delete</button>

                        </div>
                    );
                })}
            </section>
        </>
    );
}

export default ProductList