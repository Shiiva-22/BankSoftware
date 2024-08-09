import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import CreateAccount from "./CreateAccount.jsx";

import Dashboard from "./dashboard";
import {createBrowserRouter,RouterProvider} from "react-router-dom";


let AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/CreateAccount",
    element:<CreateAccount/>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouter}>
<App/>
  </RouterProvider>
    
  
)
