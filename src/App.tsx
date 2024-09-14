
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DescriptionPage from './pages/DescriptionPage';
function App() {
 

  return (
    
      <BrowserRouter>
        <Routes >
           <Route path='/' Component={HomePage}/>
           <Route path='/description/:id' Component={DescriptionPage}/>
        </Routes>
      
      
      </BrowserRouter>
         
  
  )
}

export default App
