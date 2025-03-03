import { useState } from "react";
import ProductsDataList from "./Data/Products.json";
import { Link } from "react-router-dom";
import ItemDetails from "./pages/ItemDetails";
import Carrito from "./pages/Carrito";

function ProductList(props) {
    const [sellingProducts, setSellingProducts] = useState(ProductsDataList);

    const handleRemoveProducts = (indiceDelete) => {
        const clone = sellingProducts.slice(0)

        clone.splice(indiceDelete, 1)
        setSellingProducts(clone)

    }
    const handleAddProducts = (indiceAdd) => {
        const clone = sellingProducts.slice(0)

        clone.
            setSellingProducts(clone)

    }


    return (
        <>


            <h1 style={{ textAlign: "center", color: "black" }} >Lista de productos</h1>
            <h1 style={{ textAlign: "center", color: "black" }} >Lista de productos</h1>



            <section style={{ textAlign: "center", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-evenly", border: "solid black", marginLeft: 450, width: 1000, color: "black" }}>
                {sellingProducts.map((eachProduct, indice) => {
                    <section style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-evenly", border: "solid black", margin: 10, width: 1000, color: "black" }}>

                        {sellingProducts.map((eachProduct, indice) => {
                            return (

                                <div key={eachProduct.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", border: "solid", margin: 20, width: 400, flexWrap: "wrap", borderRadius: "20px" }}>
                                    <img src={eachProduct.images} alt="" style={{ width: "100px", height: "100px", margin: 10, width: 100 }} />
                                    <h2>{eachProduct.title}</h2>
                                    <p>{eachProduct.description}</p>
                                    <p>{eachProduct.price}</p>


                                    <div key={eachProduct.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", border: "solid", margin: 20, width: 400, flexWrap: "wrap", borderRadius: "20px" }}>

                                        {/* <ItemDetails key={indice} eachProduct={eachProduct}/>
                         */}
                                        <img src={eachProduct.images} alt="" style={{ width: "100px", height: "100px", margin: 10, width: 100 }} />

                                        <Link to={`/details/${eachProduct.title}`}><h2>{eachProduct.title}</h2></Link>

                                        <p>Category: {eachProduct.category}</p>
                                        <p>Price: {eachProduct.price}</p>

                                        {eachProduct.stock > 0 ? (
                                            <p>Stock disponible ✅ {eachProduct.stock}</p>
                                        ) : (
                                            <p>Producto Agotado ❌</p>

                                        )}
                                        <button onClick={() => handleAddProducts(indice)}>Add Cart</button>

                                        <br />

                                        <button onClick={() => handleRemoveProducts(indice)}>Delete</button>

                                        <Carrito sellingProducts={sellingProducts} setSellingProducts={setSellingProducts} />
                                    </div>
                                    );
                })}
                                </section>
        </>
    );
}

                export default ProductList