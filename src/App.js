import Header from './componentes/Navbar';
import Footer from './componentes/Footer';
import Inicio from '../src/componentes/Inicio';
import Contacto from '../src/componentes/Contacto';
import Nosotros from '../src/componentes/Nosotros';
import Servicios from '../src/componentes/Servicios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (<>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/servicios' element={<Servicios />} />
        </Routes>
      <Footer />
      </Router>
  </>);
}

export default App;
