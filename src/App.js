// import logo from './logo.svg';
import './App.css';
import Index from './components/class/mata';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/class/welcome';
import Product from './components/class/Product';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route path="/list" element={<Index />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

