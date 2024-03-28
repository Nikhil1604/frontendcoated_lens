import {Box, Grid} from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Footer from './footer/Footer';
import Homepage from './component/Homepage';
import Payment from './serviceprovider/Payment';
import Photographerinfo from './client/Photographerinfo';
import ChoosePhoto from './client/ChoosePhoto'
import EarnWithUs from './component/EarnWithUs';
import About from './component/About';
import BookService from './component/BookService';
import Contact from './component/Contact';
import SideBar from './sidebar/SideBar';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Oldlead from './serviceprovider/OldLead'
// import ServiceSideBar from './sidebar/ServiceSideBar';
import Terms from './serviceprovider/Terms'
import Privacy from './serviceprovider/Privacy';
import Earning from './serviceprovider/Earning';
import ServiceSetting from './serviceprovider/ServiceSetting'
import Subsciption from './serviceprovider/Subsciption';
import ServiceAddress from './serviceprovider/ServiceAddress';
import ServiceProfile from './serviceprovider/ServiceProfile';
import Portfolio from './serviceprovider/Portfolio';
import NewLead from './serviceprovider/NewLead';
import AboutUs from './serviceprovider/AboutUs';
import AboutUsUser from './client/AboutUsUser';
import ClientDashBoard from './client/ClientDashBoard';

function App() {
  return (
    <Box sx={{bgcolor:'#fff7ea'}}>
      <Grid xs={12} container direction='row' sx={{bgcolor:'#fff7ea'}}>
        <Grid xs={4}>
            <SideBar />
            {/* <ServiceSideBar/> */}
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
            <Route path='/userdashboard' element={<ClientDashBoard />}></Route>
            <Route path='/aboutususer' element={<AboutUsUser/>}></Route>
            <Route path='/choosephoto' element={<ChoosePhoto/>}></Route>
            <Route path='/photoinfo' element={<Photographerinfo/>}></Route>
            <Route path='/newlead' element={<NewLead/>}></Route>
            <Route path='/oldlead' element={<Oldlead/>}></Route>
            <Route path='/payment' element={<Payment/>}></Route>
            <Route path='/aboutus' element={<AboutUs/>}></Route>
            <Route path='/terms' element={<Terms/>}></Route>
            <Route path='/privacy' element={<Privacy/>}></Route>
            <Route path='/earning' element={<Earning/>}></Route>
            <Route path='/servicesetting' element={<ServiceSetting/>}></Route>
            <Route path='/subsciption' element={<Subsciption/>}></Route>
            <Route path='/address' element={<ServiceAddress/>}></Route>
            <Route path='/profile' element={<ServiceProfile/>}></Route>
            <Route path='/portfolio' element={<Portfolio/>}></Route>

          </Routes>
          </Grid>
        
      </Grid>
      <Footer />
    </Box>
  );
}

export default App;
