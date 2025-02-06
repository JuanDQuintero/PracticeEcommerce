import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { store } from './store/store';
import Cart from './views/Cart';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
      <Footer />
    </Router>
  );
}

export default App;
