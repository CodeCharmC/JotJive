import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';
import Header from './components/Header';
import FooterPart from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminePrivateRoute from './components/OnlyAdminePrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route path='/projects' element={<Projects />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminePrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
        </Route>        
      </Routes>
      <FooterPart />
    </BrowserRouter>
  );
}

