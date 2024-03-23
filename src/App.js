import {Box, Grid} from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Footer from './footer/Footer';
import Homepage from './component/Homepage';
// import About from './component/About';
// import ServiceProviderEdit from './component/ServiceProviderEdit';
// import AboutUs from './component/AboutUs';
// import Payment from './component/Payment';
import Photographerinfo from './component/Photographerinfo';
import ChoosePhoto from './component/ChoosePhoto';
import EarnWithUs from './component/EarnWithUs';
import About from './component/About';
import BookService from './component/BookService';
import Contact from './component/Contact';
import SideBar from './component/SideBar';
// import { Routes } from 'react-router-dom';
import UserDashboard from './component/UserDashboard';
import Login from './component/Login';
import SignUp from './component/SignUp';
import AboutUsUser from './component/AboutUsUser';
import ServiceProviDashboard from './component/ServiceProviDashboard';
import NewLeads from './component/NewLeads';
import Oldlead from './component/Oldlead';

function App() {
  return (
    <Box sx={{bgcolor:'#fff7ea'}}>
      <Grid xs={12} container direction='row' sx={{bgcolor:'#fff7ea'}}>
        <Grid xs={4}>
            <SideBar/>
        </Grid>
        <Grid xs={8}>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/about' element={ <About />}></Route>
            <Route path='/contact' element={ <Contact />}></Route>
            <Route path='/login' element={ <Login />}></Route>
            <Route path='/signup' element={ <SignUp />}></Route>
            <Route path='/earnwithus' element={ <EarnWithUs />}></Route>
            <Route path='/bookaservice' element={ <BookService />}></Route>
            <Route path='/userdashboard' element={<UserDashboard />}></Route>
            <Route path='/aboutususer' element={<AboutUsUser/>}></Route>
            <Route path='/choosephoto' element={<ChoosePhoto/>}></Route>
            <Route path='/photoinfo' element={<Photographerinfo/>}></Route>
            <Route path='/servicedash' element={<ServiceProviDashboard/>}></Route>
            <Route path='/newlead' element={<NewLeads/>}></Route>
            <Route path='/oldlead' element={<Oldlead/>}></Route>
            
          </Routes>
            {/* <Homepage /> */}
            {/* <Login/> */}
            {/* <About /> */}
            {/* <EarnWithUs /> */}
            {/* <BookService /> */}
            {/* <Contact /> */}
            {/* <UserDashboard /> */}
            {/* <ChoosePhoto /> */}
            {/* <Photographerinfo /> */}
            {/* <AboutUs /> */}
            {/* <Payment /> */}
            {/* <ServiceProviderEdit /> */}
        </Grid>
        
      </Grid>
      <Footer />
    </Box>
  );
}

export default App;
