import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function EditForm({ allProducts, setAllProducts }) {
    const { product } = useParams();
    const navigate = useNavigate();

    // Tenemos que encontrar el producto a editar
    let clone = allProducts.find((eachProduct) => eachProduct.id === parseInt(product));

    // Estado para que podamos manejar la edicion.
    const [editedProduct, setEditedProduct] = useState({
        id: clone.id,
        title: clone.title,
        price: clone.price,
        stock: clone.stock,
        images: clone.images
    });

    // Manejamos los cambios en los inputs.
    const handleAll = (event) => {
        let name = event.target.name;
        let cloneProduct = { ...editedProduct };
        cloneProduct[name] = event.target.value;
        setEditedProduct(cloneProduct);
    };

    // Guardamos los cambios
    const handleSubmit = (event) => {
        event.preventDefault();

        // Creamos un clon de la lista de productos y actualizamos el producto editado
        const updatedProducts = allProducts.map((product) =>
            product.id === editedProduct.id ? editedProduct : product
        );

        setAllProducts(updatedProducts);
        navigate("/");
    };

    return (
        <div className="edit-form container">
            <form onSubmit={handleSubmit}>
                <h2>Editar Producto</h2>

                <label>ID:</label>
                <input type="text" name="id" value={editedProduct.id} readOnly />

                <label>Nombre:</label>
                <input type="text" name="title" value={editedProduct.title} onChange={handleAll} />

                <label>Precio:</label>
                <input type="number" name="price" value={editedProduct.price} onChange={handleAll} />

                <label>Stock:</label>
                <input type="number" name="stock" value={editedProduct.stock} onChange={handleAll} />

                <label>Imagen URL:</label>
                <input type="text" name="images" value={editedProduct.images} onChange={handleAll} />

                <div className="buttons">
                    <button type="submit">Guardar Cambios</button>
                    <Link to="/"><button>Volver</button></Link>
                </div>
            </form>
        </div>
    );
}

export default EditForm;
