import './App.css';
import {Loginpage,DoctorLogin,Patientlogin} from './pages/Login.page';
import SignupPage from './pages/Signup.page';
import { Routes,Route } from 'react-router-dom';
import Doctorpage from './pages/Doctor.page';
import Patientpage from './pages/Patient.page';
import Homepage from './pages/Home.page';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Loginpage/>}>
      <Route path='Doctor' element={<DoctorLogin/>}/>
      <Route path='Patient' element={<Patientlogin/>} />
        </Route>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/patientinfo' element={<Doctorpage/>}/>
        <Route path='/Profile' element={<Patientpage/>}/>
      </Routes>
      
    
    </div>
  );
}

export default App;
