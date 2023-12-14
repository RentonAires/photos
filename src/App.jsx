import Footer from "./components/Footer/footer.jsx"
import Header from "./components/Header/header.jsx"

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from "./components/pages/Home.jsx"
import Empresa from "./components/pages/Empresa.jsx"
import Contato from "./components/pages/Contato.jsx"
import NotFound from "./components/pages/NotFound.jsx";
import Cadastro from "./components/pages/Cadastro.jsx";

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route  path="/empresa" element={<Empresa />} />

          <Route  path="/contato" element={<Contato />} />

          <Route  path="/cadastro" element={<Cadastro />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
