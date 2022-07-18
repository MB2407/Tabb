import * as React from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from 'react';
import { AccordionDetails } from '@mui/material';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  const url= 'https://scenarioemployee.azurewebsites.net/api/HttpTrigger2?code=G_bxgTEjIOokO0kudpvXmSuZ77lhXL4b2wnysbA85kEBAzFuocpuxA==&id=3'
  const [detail, setDetail] = useState(null)

  let content = null

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setDetail(response.data)
        console.log(response.data)

      })
  }, [url])

  if(detail){
    content =
    <div className='home'>
      
    <Box sx={{ flexGrow: 1 }}>
    
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Card sx={{ minWidth: 550, margin: " 10px 10px", backgroundColor:"#060b26" }}>
    <CardContent>
      
      <Typography variant="h5" component="div" color="white">
        Employee Details
      </Typography>
      <br/>
      <Typography sx={{ mb: 1.5 }} color="white">
        Name: {detail.Name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="white">
        Age: {detail.Age}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="white">
        Address: {detail.Address}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Edit</Button>
    </CardActions>
  </Card></Item></Grid>
  <br/>
  <Grid item xs={6}><Item><Card sx={{ minWidth: 275, minHeight: 275, margin: " 10px 10px", backgroundColor:"#1a83ff" }}>
    <CardContent>
      <Typography variant="h5" component="div" color="white">
        Department details
      </Typography>
      <br/>
      <Typography sx={{ mb: 1.5 }} color="white">
        Employee ID: {detail.ID}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="white">
        Department: {detail.Department}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="white">
        Manager: {detail.Manager}
      </Typography>
    </CardContent>
    <CardActions>
      <Button sx={{size:"small", alignContent:"right"}}>Edit</Button>
    </CardActions>
  </Card></Item></Grid>
  <Grid item xs={6}><Item><Card sx={{ minWidth: 275, minHeight: 275, margin: " 10px 10px", backgroundColor:"#1a83ff" }}>
    <CardContent>
      <Typography variant="h5" component="div" color="white">
        Leave Balance
      </Typography>
      <br/>
      <Typography sx={{ mb: 1.5 }} color="white">
        Remaining paid leaves: {detail.paidRemaining}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="white">
        Remaining sick leaves: {detail.sickRemaining}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="white">
        Remaining maternity leaves: {detail.maternityRemaining}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="white">
        Remaining carried over leaves: {detail.prevRemaining}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Edit</Button>
    </CardActions>
  </Card></Item></Grid>
  </Grid>
  </Box>
  </div>
  }
  
  return (
    <div>
        {content}
    </div>
  )
}

export default Home;
