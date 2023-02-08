
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import PetPage from './Pages/PetPage';
import Container from './Component/Container';
import PetDetailPage from './Pages/PetDetailPage';
import CartPage from './Pages/CartPage';
function App() {
  // cd reactjs-tutorial
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Container />}>
          <Route index element={<HomePage />} />
          <Route path='/Pet' element={<PetPage />} />
          <Route path='/Pet/:detail' element={<PetDetailPage />} />
          <Route path='/Cart' element={<CartPage />} />
        </Route>
      </Routes>


    </div>
  );
}
export default App;
