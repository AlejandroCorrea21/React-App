import Footer from "./components/Footer";
import ProductList from "./ProductList";
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ItemDetails from "./pages/ItemDetails";
import { Link } from 'react-router-dom'
function App() {
  return (
    <>

      <nav style={{ backgroundColor: "blue", height: 50, width: "100%", display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about" style={{ color: "white" }}>About</Link>
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
