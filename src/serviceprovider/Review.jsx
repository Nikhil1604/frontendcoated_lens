import { Grid, Typography } from '@mui/material'
import React from 'react'
import pho from '../images/pho.jpg'

const Review = () => {
  return (
    <Grid xs={6} container direction='column' justifyContent='center' alignItems='center' >
       
        <Grid container direction='row' justifyContent='center' alignItems='center' sx={{backgroundColor:'#fff7ea',width:'90%',borderRadius:'10px'}}>
       
            <Grid xs={6} container direction='column' justifyContent='center' alignItems='center'>
       
                <Grid container direction='row' justifyContent='flex-start' alignItems='flex-start'> 
       
                    <img src={pho} alt="phot" />
                    <Grid paddingLeft='20px'>
                        <Typography>Ajay Raj</Typography>
                        <Typography>7 days ago</Typography>
                        <Typography>*****</Typography>
                    </Grid>

                </Grid>
                
                <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime repudiandae quibusdam cumque exercitationem ex praesentium accusantium, eum debitis iste itaque quo mollitia cum magnam. Tenetur natus vero fugiat earum voluptas? Soluta cumque.</Typography>
            
            </Grid>

        </Grid>
    </Grid>
  )
}

export default Review