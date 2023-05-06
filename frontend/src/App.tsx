import  SideNav from './components/SideNav'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Cameras from './pages/Cameras'
import Contacts from './pages/Contacts'
import Data from './pages/Data'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard/>}/>
          <Route path="/cameras" exact element={<Cameras/>}/>
          <Route path="/contacts" exact element={<Contacts/>}/>
          <Route path="/data" exact element={<Data/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
