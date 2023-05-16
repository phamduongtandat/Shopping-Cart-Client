import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PetPage from "./Pages/PetPage";
import Container from "./Component/Container";
import PetDetailPage from "./Pages/PetDetailPage";
import CartPage from "./Pages/CartPage";
import NotFoundPage from "./Pages/NotFoundPage";
import { CartProvider } from "./Context/CartContext";

import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { RegisterProvider } from "./Context/RegisterContext";
import { LoginProvider } from "./Context/LoginContext";
import AdminPage from './Pages/Admin/AdminPage';
//import checkLogin from './Utils/checkLogin';

function App() {


  return (
    <div className="App">

      <Routes>
        <Route
          path="/"
          element={<Container />}
        >
          <Route index element={<HomePage />} />
          <Route path="/Pet" element={
            <CartProvider>

              < PetPage />

            </CartProvider>}
          />
          <Route path="/Pet/:detail" element={<CartProvider><PetDetailPage /></CartProvider>} />
          <Route path="/Cart" element={<CartProvider><CartPage /></CartProvider>} />
          <Route path='/Register' element={<RegisterProvider><RegisterPage /></RegisterProvider>} />
          <Route path="/Admin" element={<AdminPage />} />
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
