import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Products from './pages/Products';
import Login from './pages/Login';
import Footer from './components/Footer';
import Category from './pages/Category';
import bannermens from "./assets/bannermens.png"
import bannerwomens from "./assets/bannerwomens.png"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mens' element={<Category category="men" banner={bannermens}/>}/>
      <Route path='/womens' element={<Category category="women" banner={bannerwomens}/>}/>
      <Route path='/products' element={<Products/>}>
        <Route path=':productId' element={<Products/>}/>
        </Route>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
