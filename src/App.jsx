import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'



function App() {


 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Layout/>}>  
    <Route index element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />

   </Route>
  )
 )

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
