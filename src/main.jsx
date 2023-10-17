import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Home from './components/Home';
import ContactMe from './components/ContactMe';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home />,
        loader: ()=> fetch('ProjectData.json')
      }

      ,
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/experience',
        element: <Experience />
   

      },{
        path:'/projects',
        element: <Projects />,
        loader: ()=> fetch('ProjectData.json')
      },
      {
        path:'/contact',
        element:<ContactMe />,
        
      }
    ]
   
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
