import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PetPage from "./Pages/PetPage";
import Container from "./Component/Container";
import PetDetailPage from "./Pages/PetDetailPage";
import CartPage from "./Pages/CartPage";
import NotFoundPage from "./Pages/NotFoundPage";
import { CartProvider } from "./Context/CartContext";
import { SearchProvider } from "./Context/SearchContext";
function App() {

  //const [keyWord, setKeyWork] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<SearchProvider><Container /></SearchProvider>}
        >
          <Route index element={<HomePage />} />
          <Route path="/Pet" element={<CartProvider> <SearchProvider>< PetPage /></SearchProvider> </CartProvider>} />
          <Route path="/Pet/:detail" element={<PetDetailPage />} />
          <Route path="/Cart" element={<CartProvider><CartPage /></CartProvider>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
