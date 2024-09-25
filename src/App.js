import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar1 from './components/Navbar1';
import Login from './components/Login';
import Register from './components/Register'
import Home from './pages/Home';
import Freetheme from './pages/Freetheme';
import Blog from './pages/Blog';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Forgetpass from './components/Forgetpass';
import ProtectedComp from './components/ProtectedComp';
import Puzzle1 from './pages/Puzzlepage/Puzzle1';
import Puzzle2 from './pages/Puzzlepage/Puzzle2';
import Puzzle3 from './pages/Puzzlepage/Puzzle3';
import Chnagerule from './components/Changerule';
import Dashboard from './pages/dashboard/Dashboard';
import Wordpuzzle from './pages/Anohterpuzzle/Wordpuzzle';
import Wordpuzzle1 from './pages/Anohterpuzzle/Wordpuzzle1';
import Wordpuzzle2 from './pages/Anohterpuzzle/Wordpuzzle2';
import Wordpuzzle3 from './pages/Anohterpuzzle/Wordpuzzle3';
import Wordpuzzle4 from './pages/Anohterpuzzle/Wordpuzzle4';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1/>
        <Routes>
          <Route element={<ProtectedComp />}>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='free' element={<Freetheme />} />
            <Route path='blog' element={<Blog />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='changerule' element={<Chnagerule />} />
            <Route path='puzzle1' element={<Puzzle1 />} />
            <Route path='puzzle2' element={<Puzzle2 />} />
            <Route path='puzzle3' element={<Puzzle3 />} />
            <Route path='word-puzzle' element={<Wordpuzzle />} />
            <Route path='word-puzzle1' element={<Wordpuzzle1/>} />
            <Route path='word-puzzle2' element={<Wordpuzzle2/>} />
            <Route path='word-puzzle3' element={<Wordpuzzle3/>} />
            <Route path='word-puzzle4' element={<Wordpuzzle4/>} />
          </Route>
          <Route path='forget' element={<Forgetpass />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;