import {Box, Grid} from '@mui/material'
import './App.css';
import Footer from './footer/Footer';
// import Home from './component/Home';
import Homepage from './component/Homepage';
import Home from './component/Home';

function App() {
  return (
    <Box sx={{width:'1920px',bgcolor:'#fff7ea'}}>
      <Grid xs={12} container direction='row' sx={{bgcolor:'#fff7ea'}}>
        <Grid xs={3}>
            <Home/>
        </Grid>
        <Grid xs={9}>
            <Homepage/>
        </Grid>
        
        
      </Grid>
      <Footer />
    </Box>
  );
}

export default App;
