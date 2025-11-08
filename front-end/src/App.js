import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/home'
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer'
import Dishes from './Components/Dishes/Dishes';
import Cart from './Pages/Cart'
import DisplayDishes from './Pages/DisplayDishes';
import Ourcheckout from './Pages/Ourcheckout';
import Thankyou from './Pages/Thankyou';


function App() {
  return (
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route>
          <Route path='/' element={<Home/>} />  
          <Route path='/login' element={<LoginSignup/>} />


      
          <Route path='/dishe' element={<DisplayDishes/>} >
              <Route path=':disheId' element={<DisplayDishes/>} />
          </Route>


          <Route path='/dishes' element={<Dishes/>} />  

          <Route path='/cart' element={<Cart/>} />

           <Route path='/checkout' element={<Ourcheckout/>} />
           <Route path='/thankyou' element={<Thankyou/>} />


      </Route>
     </Routes>
     <Footer/>

           </BrowserRouter>

  );
}

export default App;
