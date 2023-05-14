import {Routes, Route} from 'react-router-dom';
import  Home  from './components/home.jsx';
import Login from './components/login.jsx';
import Register from './components/Register.jsx';
export default function App() {
    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>    
    )
}