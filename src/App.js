import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PetPage from "./Pages/PetPage";
import Container from "./Component/Container";
import PetDetail from "./Component/PetDetail";
import { useState } from "react";
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
          <Route path="/Pet/:detail" element={<PetDetail />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
