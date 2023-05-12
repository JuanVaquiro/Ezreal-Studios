import React from 'react'
import ReactDOM from 'react-dom/client'
import { useRoutes, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import Abaut from './pages/Abaut.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import './styles/index.css'

const AppRouters = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/nosotros',
      element: <Abaut />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/*',
      element: <NotFound />
    },
  ])
  return routes
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AppRouters />
    </HashRouter>
  </React.StrictMode>,
)
