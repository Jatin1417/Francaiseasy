import React from 'react'
import './main.css';
import { Grid,Card,Box,Stack,CardContent,Typography,Container,Button } from '@mui/material';
import A1 from './images/A1.png';
import A2 from './images/A2.png';
import B1 from './images/B1.png';
import B2 from './images/B2.png';



function Levels() {
    return (
        <div className='Levels'>
        <Container>
        <p className='heading'>Know about each Level</p>
        <Box >
          <Grid container  spacing={2} justify="flex-start">
            <Grid item xs={12} sm={6} md={3} className='grid'>
              <Card className='grid-card'>
                <CardContent className='card-container'>
                  <Stack direction={'column'} className='grid-stack' spacing={2}>
                    <Typography variant={"h6"} gutterBottom>
                      <img src={A1} className='A1' alt='A1'/>
                    </Typography>
                    <Typography><p className='level-p'>Click below to know about A1 Level</p></Typography>
                    <Typography><Button>Learn More</Button></Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} order={{ xs: 3, sm: 2 }} className='grid'> 
              <Card className='grid-card'>
                <CardContent className='card-container'>
                  <Stack direction={'column'}  className='grid-stack' spacing={2}>
                    <Typography variant={"h6"} gutterBottom>
                    <img src={A2} className='A2' alt='A2'/>
                    </Typography>
                    <Typography><p className='level-p'>Click below to know about A2 Level</p></Typography> 
                    <Typography><Button>Learn More</Button></Typography> 
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} order={{ xs: 2, sm: 3 }} className='grid'>
              <Card className='grid-card'>
                <CardContent className='card-container'>
                  <Stack direction={'column'}  className='grid-stack' spacing={2}>
                    <Typography variant={"h6"} gutterBottom>
                    <img src={B1} className='B1' alt='B1'/>
                    </Typography>
                    <Typography><p className='level-p'>Click below to know about B1 Level</p></Typography>
                    <Typography><Button>Learn More</Button></Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} order={{ xs: 2, sm: 3 }} className='grid'>
              <Card className='grid-card'>
                <CardContent className='card-container'>
                  <Stack direction={'column'} className='grid-stack' spacing={2}>
                    <Typography variant={"h6"} gutterBottom>
                    <img src={B2} className='B2' alt='B2'/>
                    </Typography>
                    <Typography><p className='level-p'>Click below to know about B2 Level</p></Typography>
                    <Typography><Button>Learn More</Button></Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      </div>
    )
}
export default Levels;