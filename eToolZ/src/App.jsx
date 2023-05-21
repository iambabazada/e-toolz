
import { AppRouter } from './router/router'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './layout/navbar/Navbar.jsx'

import './styles/main.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
