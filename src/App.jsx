import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import ProductList from "./ProductList";

function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Sidebar />
      <Cards />
      <Body />
      <Footer />

    </>
  )
}


export default App
