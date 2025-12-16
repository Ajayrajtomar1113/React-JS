
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <h2>hello</h2>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
