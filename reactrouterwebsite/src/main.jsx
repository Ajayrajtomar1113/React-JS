// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import Contact from './components/Contact/Contact'
// import User from './components/User/User'
// import Github from './components/Github/Github'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='contact' element={<Contact/>}/>
//       <Route path='user/:userId' element={<User/>}/>
//       <Route path='github' element={<Github/>}/>
//     </Route>
//   )
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}/>
//   </StrictMode>,
// )
 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App></App>
  </StrictMode>,
)