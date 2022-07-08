import * as React from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box m={2} pt={3}
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Home() {
  return (
    <div className='home'>
    
      <Card sx={{ minWidth: 550, margin: " 40px 40px", backgroundColor:"#1a83ff" }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          Employee Details
        </Typography>
        <br/>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Name: XYZ
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Age: 30
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Contact no.: 1234xxxxxx
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Address: A-1, Ashok Vihar, Phase-1, New Delhi
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
    <br/>
    <Card sx={{ minWidth: 275, margin: " 10px 10px", backgroundColor:"#1a83ff" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Department details
        </Typography>
        <br/>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Department:IT
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Manager: Mr.Nick Fury
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Employee id: 13
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{size:"small", alignContent:"right"}}>Edit</Button>
      </CardActions>
    </Card>
    <Card sx={{ minWidth: 275, margin: " 10px 10px", backgroundColor:"#1a83ff" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Leave Balance
        </Typography>
        <br/>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Paid leaves: 9
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Sick leaves: 10
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Carry over from previous year: 3
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default Home;
