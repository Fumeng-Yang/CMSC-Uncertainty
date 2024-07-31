
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react"
import Home from './Home.js'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
  }, [])
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route exact path="" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
