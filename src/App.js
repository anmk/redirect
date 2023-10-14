import React, { useEffect } from 'react';
import {
  BrowserRouter, Route, Routes, useNavigate,
} from 'react-router-dom';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let didCancel = false;
    const goToHomePage = () => navigate('/home');
    if (!didCancel) {
      goToHomePage();
    }
    return () => {
      didCancel = true;
    };
  }, [navigate]);
  return (
    <div>
      <h1>Welcome Main!</h1>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const goToNewsPage = () => navigate('/news');
  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>Routing has been redirected to a Home page in React Router 6.</p>
      <button type="button" onClick={goToNewsPage}>Go to News page</button>
    </div>
  );
};

const News = () => (
  <div>
    <h1>Welcome News!</h1>
    <p>Routing has been redirected to a News page in React Router 6.</p>
  </div>
);

const NotFound = () => (
  <div>
    <h1>Not found!</h1>
    <p>Sorry your page was not found!</p>
  </div>
);

export default App;
