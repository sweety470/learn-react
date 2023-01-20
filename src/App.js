import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Css from './components/css/Css';
import Home from './components/Home'
import Props from './components/props/Props';
import { Goal } from './components/props/Goal';
import { Map } from './components/props/Map';
import { Form } from './components/form/Form';
import { Nopage } from './components/Nopage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path ='/' element={<Home/>} />
        <Route path = "/css" element = {<Css />} />
        <Route path ="/props" element = {<Props name="sweety" />} />
        <Route path ="/goal" element = {<Goal isGoal={false} />} />
        <Route path ="/map" element ={<Map />} />
        <Route path = "/form" element = {<Form />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
      </BrowserRouter>
     
      {/* hi
      <Css /> */}
    </div>
  );
}

export default App;
