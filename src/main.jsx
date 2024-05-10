import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import Context from './Provider/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
        <RouterProvider router={Router}> </RouterProvider>
    </Context>
  </React.StrictMode>,
)
