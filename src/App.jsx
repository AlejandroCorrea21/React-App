import ProductList from "./ProductList";
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ItemDetails from "./pages/ItemDetails";
import { Link } from 'react-router-dom'

function App() {
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
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/details/:product" element={<ItemDetails />} />
        {/* <Sidebar />
      <Footer /> */}

      </Routes>
    </>
  )
}


export default App
