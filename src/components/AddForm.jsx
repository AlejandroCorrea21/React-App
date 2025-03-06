import { useState } from "react";
import { useNavigate } from "react-router-dom";



function AddForm(props) {

    const navigate = useNavigate()


    const [nameInputValue, setNameInputValue] = useState("");
    const [priceInputValue, setPriceInputValue] = useState(0);
    const [stockInputValue, setStockInputValue] = useState(0);
    const [imageInputValue, setImageInputValue] = useState("");

    const handleNameInputChange = (event) => {
        console.log(event.target.value);

        /* let valorDelCampo = event.target.value
        if (valorDelCampo === "LOL") {
        valorDelCampo = "NO"}
        } 
        setNameInputValue(valorDelCampo) */

        setNameInputValue(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPriceInputValue(event.target.value);
    };

    const handleStockChange = (event) => {
        setStockInputValue(event.target.value);
    };

    const handleImageChange = (event) => {
        setImageInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault() // Eliminamos el comportamiento predeterminado de el formulario
        console.log("Entregando el formulario");

        //1. Necesitamos recopilar la data a crear
        const productoParaAñadir = {
            id: props.allProducts.length + 1, // ID único el producto
            title: nameInputValue,
            price: priceInputValue,
            stock: stockInputValue,
            images: [imageInputValue] // las imagenes en un array.
        };
        console.log(productoParaAñadir);
        //2. necesitamos actualizarlo en el estado
        const clone = [...props.allProducts];
        clone.unshift(productoParaAñadir);
        props.setAllProducts(clone);

        //3. reiniciamos los campos
        setNameInputValue("");
        setPriceInputValue(0);
        setStockInputValue(0);
        setImageInputValue("");

        navigate("/");

    };

    return (
        <div className="add-form container" style={{ display: "flex", flexDirection: "column", textAlign: "center", padding: '30px', color: "black" }}>
            <h2 style={{ textAlign: 'center', padding: '30px' }}>Formulario</h2>

            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name: </label>
                    <input style={{ color: 'black', fontSize: '15px', fontStyle: 'italic' }} onChange={handleNameInputChange} value={nameInputValue} type="text" name="name" required />
                </div>

                <div>
                    <label htmlFor="price">Price: </label>
                    <input min={0} onChange={handlePriceChange} value={priceInputValue} type="number" name="price" required />
                </div>

                <div>
                    <label htmlFor="stock">Stock: </label>
                    <input min={0} onChange={handleStockChange} value={stockInputValue} type="number" name="stock" required />
                </div>

                <div>
                    <label htmlFor="image">Image URL: </label>
                    <input onChange={handleImageChange} value={imageInputValue} type="text" name="image" required />
                </div>
                <button type="submit" >Add</button>
            </form>

        </div>
    );
}

export default AddForm;