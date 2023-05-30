
import { AppRouter } from './router/router'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './layout/navbar/Navbar.jsx'

import './styles/main.css'
import Footer from './layout/footer/Footer'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
