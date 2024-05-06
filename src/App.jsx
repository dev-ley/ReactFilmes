import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import GlobalStyles from './Style/GlobalStyles'

function App() {

  return (
    <>
    <GlobalStyles/>
    <Navbar />
    <Outlet />
    </>
  )
}

export default App
