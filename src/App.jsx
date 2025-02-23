import { lazy, Suspense } from 'react'
import './App.css'
import {BrowserRouter,Route, Routes, useNavigate} from 'react-router-dom'
const Routing = lazy(() => {
  console.log("Lazy component is being loaded...");
  return import('./components/Routing');
});


const Btn = lazy(()=>import('./components/Btn'))
function App() {
 

  return (
    <>
     <BrowserRouter>
     <AppBar/>
      <Routes> 
        <Route path="/route" element={<Suspense fallback={<div>loading.....</div>}><Routing/></Suspense>}/>
        <Route path="/" element={<Suspense fallback={<div>loading.....</div>}><Btn/></Suspense>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

function AppBar(){
  const navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>{
        navigate('/')
      }}>land</button>
      <button onClick={()=>{
        navigate('/route')
      }}>dash</button>
    </div>
  )
}


export default App
