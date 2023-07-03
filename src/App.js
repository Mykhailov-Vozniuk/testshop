import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Home} from './Components/Home/Home';
import {ProductPage} from './Components/ProductPage/ProductPage';
import { Provider } from 'react-redux'
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/product">
              <Route path=":productId" element={<ProductPage />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
