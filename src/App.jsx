import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import BurgerImages from './BurgerImages';
import Menu from './Menu';
import { Routes, Route } from 'react-router-dom';
function App(){
  return(
<>
<Header/>
<Navigation/>
<Routes>
    <Route path="/" element={<BurgerImages />} />
    <Route path="/menu" element={<Menu />} />
</Routes>

       



</>
  );
}
export default App;