
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PetPage from './Pages/PetPage';
import Container from './Component/Container';
import PetDetail from './Component/PetDetail';
function App() {
  // cd reactjs-tutorial
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Container />}>
          <Route index element={<HomePage />} />
          <Route path='/Pet' element={<PetPage />} />
          <Route path='/Pet/:detail' element={<PetDetail />} />
        </Route>
      </Routes>


    </div>
  );
}
export default App;
