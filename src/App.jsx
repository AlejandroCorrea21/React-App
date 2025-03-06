import ProductsDataList from "./Data/Products.json";
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ItemDetails from "./pages/ItemDetails";
import { Link } from 'react-router-dom'
import { useState } from "react";
import ProductList from './ProductList'
import AddForm from "./components/AddForm";
import EditForm from "./pages/EditForm";

function App() {

  const [allProducts, setAllProducts] = useState(ProductsDataList)
  console.log(allProducts)
  return (
    <>


      <nav style={{ backgroundColor: "#57C5FA", height: 100, width: "100%", display: "flex", justifyContent: "space-around", fontSize: 25 }}>

        <img src="../assets/logo.png" alt="" />
        <Link to="/" style={{ color: "white", marginTop: 25 }}>Home</Link>
        <br />
        <Link to="/about" style={{ color: "white", marginTop: 25 }}>About</Link>
        <br />
      </nav>

      <Routes>

        {/* <Navbar /> */}
        <Route path="/" element={<ProductList allProducts={allProducts} setAllProducts={setAllProducts} />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/details/:product" element={<ItemDetails allProducts={allProducts} setAllProducts={setAllProducts} />} />
        console.log()
        <Route path="/add-product" element={<AddForm allProducts={allProducts} setAllProducts={setAllProducts} />} />
        <Route path="/edit/:product" element={<EditForm allProducts={allProducts} setAllProducts={setAllProducts} />} />

        {/* <Sidebar />
      <Footer /> */}

      </Routes>
    </>
  )
}

// en APP nosostros definimos los nombres de los parámetros dinámicos. EJ: ":asi se llamará"
// En enlaces y redirecciones se interpolan los valores.

export default App
