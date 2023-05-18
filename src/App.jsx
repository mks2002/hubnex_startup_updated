import Startup from './pages/Startup'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Startup />}/>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      
    </BrowserRouter>
  </>
  )
}

export default App
