import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProductList from "./ProductList";

import {Routes, Route} from 'react-router-dom'
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ItemDetails from "./pages/ItemDetails";
import Carrito from "./pages/Carrito";
import {Link} from 'react-router-dom'
function App() {
  return (
    <>
    
        <nav style={{backgroundColor:"blue" ,height:50, width:"100%", display:"flex",justifyContent:"space-around"}}>
          <Link to="/">Home</Link>
        <br />
          <Link to="/about">About</Link>
        <br />
        <Link to="/carrito">Carrito</Link>
        
        </nav>
    
    <Routes>

      {/* <Navbar /> */}
       <Route path="/" element = { <ProductList /> } /> 
       <Route path="*" element = { <NotFoundPage/>} />
       <Route path="/about" element = { <AboutPage/>} />
       <Route path="/details/:product" element = { <ItemDetails/>} />
       <Route path="/carrito" element = { <Carrito/>} />
      {/* <Sidebar />
      <Footer /> */}

    </Routes>
    </>
  )
}


export default App
