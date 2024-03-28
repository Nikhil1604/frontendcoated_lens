import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Lead from './Lead'

const NewLead = () => {
  return (
    <Box height='100%' backgroundColor='white'>
        <Grid container direction='column' >
                <Typography  paddingY='10px' fontSize='28px' paddingLeft='50px' color='white' backgroundColor='#ff258d'>
                    New Lead
                </Typography>
                
                <Grid xs={16} container direction='row' paddingY='10px' paddingLeft='40px'>
                  
                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>                    
                    
                </Grid>


            </Grid>
    </Box>
  )
}

export default NewLead