import { CheckBox } from '@mui/icons-material'
import { Box, Button, FormControlLabel, Grid, Typography } from '@mui/material'
import React from 'react'

const Payment = () => {
  return (
    <Box sx={{height:'100%',backgroundColor:'white'}}>
        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{paddingTop:'20px'}}>
            
            <Grid xs={4} container direction='row' justifyContent='space-around' alignItems='center'>
                <Typography fontSize='20px'>Monthly <Typography fontSize='14px' display='inline-block' sx={{backgroundColor:'orange',padding:'2px',borderRadius:'5px'}}>30%</Typography></Typography>
                <Typography fontSize='20px'>Yearly <Typography fontSize='14px' display='inline-block' sx={{backgroundColor:'lightgreen',padding:'2px',borderRadius:'5px'}}>50%</Typography></Typography>
            </Grid>

            <Grid xs={8} container direction='column' justifyContent='center' alignItems='flex-start' sx={{marginTop:'100px',padding:'15px',border:'2px solid black',borderRadius:'10px',backgroundColor:'#fff7ea'}}>
                <Grid container direction='row' justifyContent='space-between'> 
                <FormControlLabel control={<CheckBox/>} label='Monthely' fontSize='24px'/>
                <Typography fontSize='24px' sx={{textDecoration:'line-through'}}> $15000 <Typography fontSize='24px' display='inline-block' sx={{paddingLeft:'20px'}}>900</Typography></Typography>
                </Grid>
                <Typography fontSize='20px'>For business processing up to ₹ 10 Lakhs in monthly payouts</Typography>
                <Typography fontSize='16px'>Zero transaction charges + access to OPEN’s all in one financial automation software + premium support & more</Typography>
            </Grid>

            <Grid xs={8} container direction='column' justifyContent='center' alignItems='flex-start' sx={{marginTop:'30px',padding:'15px',border:'2px solid black',borderRadius:'10px',backgroundColor:'#fff7ea'}}>
                <Grid container direction='row' justifyContent='space-between'> 
                <FormControlLabel control={<CheckBox/>} label='Quartly' fontSize='24px'/>
                <Typography fontSize='24px' sx={{textDecoration:'line-through'}}> $30000 <Typography fontSize='24px' display='inline-block' sx={{paddingLeft:'20px'}}>850</Typography></Typography>
                </Grid>
                <Typography fontSize='20px'>For business processing up to ₹ 10 Lakhs in monthly payouts</Typography>
                <Typography fontSize='16px'>Zero transaction charges + access to OPEN’s all in one financial automation software + premium support & more</Typography>
            </Grid>

            <Grid xs={8} container direction='column' justifyContent='center' alignItems='flex-start' sx={{marginTop:'30px',padding:'15px',border:'2px solid black',borderRadius:'10px',backgroundColor:'#fff7ea'}}>
                <Grid container direction='row' justifyContent='space-between'> 
                <FormControlLabel control={<CheckBox/>} label='Half-Yearly' fontSize='24px'/>
                <Typography fontSize='24px' sx={{textDecoration:'line-through'}}> $90000 <Typography fontSize='24px' display='inline-block' sx={{paddingLeft:'20px'}}>800</Typography></Typography>
                </Grid>
                <Typography fontSize='20px'>For business processing up to ₹ 10 Lakhs in monthly payouts</Typography>
                <Typography fontSize='16px'>Zero transaction charges + access to OPEN’s all in one financial automation software + premium support & more</Typography>
            </Grid>

            <Grid xs={8} container direction='column' justifyContent='center' alignItems='flex-start' sx={{marginTop:'30px',padding:'15px',border:'2px solid black',borderRadius:'10px',backgroundColor:'#fff7ea'}}>
                <Grid container direction='row' justifyContent='space-between'> 
                <FormControlLabel control={<CheckBox/>} label='Yearly' fontSize='24px'/>
                <Typography fontSize='24px' sx={{textDecoration:'line-through'}}> $150000 <Typography fontSize='24px' display='inline-block' sx={{paddingLeft:'20px'}}>600</Typography></Typography>
                </Grid>
                <Typography fontSize='20px'>For business processing up to ₹ 10 Lakhs in monthly payouts</Typography>
                <Typography fontSize='16px'>Zero transaction charges + access to OPEN’s all in one financial automation software + premium support & more</Typography>
            </Grid>

            <Grid xs={8} container paddingTop='20px' paddingLeft='10px'>
                <Button sx={{backgroundColor:'#ff258d',color:'white', paddingX:'50px',paddingY:'10px',borderRadius:'25px',fontSize:'20px'}}>Next</Button>
            </Grid>

        </Grid>
    </Box>
  )
}

export default Payment