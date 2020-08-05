import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RedirectTo from './RedirectTo';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectTo path="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

const Home = () => (
  <div>
    <h1>Welcome Home!</h1>
    <p>Routing has been redirected to a selected address in React Router 6.</p>
  </div>
);

const Products = () => (
  <div>
    <h1>Welcome Products!</h1>
  </div>
);

const NotFound = () => (
  <div>
    <h1>Not found!</h1>
    <p>Sorry your page was not found!</p>
  </div>
);

export default App;
