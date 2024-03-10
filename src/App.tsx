import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyles } from './styles/GlobalStyles';
import Login from './pages/Login/Login';
import Table from './pages/Table/Table';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/tabla' element={<Table/>}></Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyles/>
      <Toaster position="top-right"/>
    </>
  )
}

export default App