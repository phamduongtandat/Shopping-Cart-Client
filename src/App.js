import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import PetPage from "./Pages/PetPage";
import Container from "./Component/Container";
import PetDetailPage from "./Pages/PetDetailPage";
import CartPage from "./Pages/CartPage";
import NotFoundPage from "./Pages/NotFoundPage";
function App() {
  // cd reactjs-tutorial
  const [keyWord, setKeyWork] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Container keyWord={keyWord} setKeyWork={setKeyWork} />}
        >
          <Route index element={<HomePage />} />
          <Route path="/Pet" element={<PetPage keyWord={keyWord} />} />
          <Route path="/Pet/:detail" element={<PetDetailPage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
