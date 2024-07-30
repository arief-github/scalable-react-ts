/* eslint-disable prettier/prettier */
import './App.css';

// React Router
import { BrowserRouter as Router, Link, Route ,Routes } from 'react-router-dom'

// Components
import AddProduct from './views/products/AddProduct'
import DeleteProduct from './views/products/DeleteProduct'
import EditProduct from './views/products/EditProduct'
import Products from './views/products/Products'
import ViewProduct from './views/products/ViewProduct'
import ViewAnimalPhotos from './views/animal/ViewAnimalPhotos';


function App() {
  return (
    <div className='App mx-auto max-w-6xl text-center my-8'>
      <h1 className='font-semibold text-2xl'>React Professional Enterprises</h1>
      <div className="mt-8">
        <Router>
          <nav className='space-x-4 mb-6'>
            <Link to="/products">Browse Products</Link>
            <Link to="/products/add">Add Product</Link>
            <Link to="/products/1/edit">Edit Product</Link>
            <Link to="/products/1/delete">Delete Product</Link>
            <Link to="/products/1">View Product</Link>
          </nav>
          <Routes>
            <Route path='/products'>
              <Route index element={<Products />} />
              <Route path='add' element={<AddProduct />} />
              <Route path=':productId/edit' element={<EditProduct />} />
              <Route path=':productId/delete' element={<DeleteProduct />} />
              <Route path=':productId' element={<ViewProduct />} />
            </Route>
            <Route path='/animals' element={<ViewAnimalPhotos/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
