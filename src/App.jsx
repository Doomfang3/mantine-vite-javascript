import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import UserPage from './pages/UserPage'
import Sidebar from './components/Sidebar'


function App() {
  return (
  <>
   
    <Routes>
      <Route path={"/"} element={<hi>Potion Magic</hi>} />
      <Route path={"/users"} element={UserPage} />ﬂ€

      <Route path={"*"} element={<h1>404 Page</h1 >} />
      </Routes>
    </> 
  )
  }
export default App
