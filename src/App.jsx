import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthNav from './components/AuthNav/AuthNav';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import './App.css'


const Home = lazy(() => import('./pages/Home/Home'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));


function App() {
  return (

    <div >
      <AuthNav/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes> 
<Route path="/" element = {<Home/>}/>
<Route path="/catalog" element = {<CatalogPage/>}/>
<Route path="/favorites" element = {<Favorites/>}/>
<Route path="/*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
      
    </div>

  );
}


export default App