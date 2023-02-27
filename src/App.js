import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PetPage from "./Pages/PetPage";
import Container from "./Component/Container";
import PetDetailPage from "./Pages/PetDetailPage";
import CartPage from "./Pages/CartPage";
import NotFoundPage from "./Pages/NotFoundPage";
import { CartProvider } from "./Context/CartContext";
import { SearchProvider } from "./Context/SearchContext";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { RegisterProvider } from "./Context/RegisterContext";
import { LoginProvider } from "./Context/LoginContext";
import Header from "./Component/Header";
function App() {

  //const [keyWord, setKeyWork] = useState("");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<SearchProvider><Container /></SearchProvider>}
        >
          <Route index element={<HomePage />} />
          <Route path="/Pet" element={
            <CartProvider>
              <SearchProvider>
                < PetPage />
              </SearchProvider>
            </CartProvider>}
          />
          <Route path="/Pet/:detail" element={<CartProvider><PetDetailPage /></CartProvider>} />
          <Route path="/Cart" element={<CartProvider><CartPage /></CartProvider>} />
          {/* <Route path='/Login' element={<LoginProvider><LoginPage /></LoginProvider>} /> */}
          <Route path='/Register' element={<RegisterProvider><RegisterPage /></RegisterProvider>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path='/Login' element={<LoginProvider><LoginPage /></LoginProvider>} />
      </Routes>

      {/* <Header />
      <div style={{ marginTop: "100px" }}>
        <Routes >

          <Route path="/" element={<HomePage />} />
          <Route path="/Pet" element={
            <CartProvider>
              <SearchProvider>
                < PetPage />
              </SearchProvider>
            </CartProvider>}
          />
          <Route path="/Pet/:detail" element={<CartProvider><PetDetailPage /></CartProvider>} />
          <Route path="/Cart" element={<CartProvider><CartPage /></CartProvider>} />
          <Route path='/Login' element={<LoginProvider><LoginPage /></LoginProvider>} />
          <Route path='/Register' element={<RegisterProvider><RegisterPage /></RegisterProvider>} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </div> */}


    </div>
  );
}
export default App;
