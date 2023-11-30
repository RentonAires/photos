import Footer from "./components/Footer/footer.jsx"
import Header from "./components/Header/header.jsx"

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from "./components/pages/Home.jsx"
import Empresa from "./components/pages/Empresa.jsx"
import Contato from "./components/pages/Contato.jsx"

function App() {
  return (
    <>
      <Router>
        <ul>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li >
            <Link to="/empresa">Exemplo01</Link>
          </li>
          <li >
            <Link to="/contato">Exemplo02</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={Home} />

          <Route exact path="/empresa" element={Empresa} />

          <Route exact path="/contato" element={Contato} />

        </Routes>
      </Router>


      <Header />
      <Footer />
    </>
  )
}

export default App
