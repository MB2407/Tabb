import './Leave.css';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; 
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

function Leave() {
  const [name, setName] = React.useState('xyz');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className='leave'>
      <h3>Apply for Leave</h3>
      <br/>
      
      
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography sx={{ mb: 2.5 }} color="text.primary">
          Select the type of leave:
        </Typography>
        <TextField id="select" label="Type Of Leave" value="100" select>
          <MenuItem value="paid">Paid Leave</MenuItem>
          <MenuItem value="sick">Sick Leave</MenuItem>
          <MenuItem value="maternity">Maternity Leave</MenuItem>
          <MenuItem value="previous">Carry over from previous year</MenuItem>
        </TextField>
        <br/>
        <TextField
        id="outlined-name"
        label="From"
        value="From"
        onChange={handleChange}
      />
        <TextField
        id="outlined-name"
        label="To"
        value="To"
        onChange={handleChange}
      />
      <Divider variant="full" />
      <Typography sx={{ mb: 2.5 }} color="text.primary">
          About the leave
        </Typography>
      <TextField
        id="outlined-name"
        label="Title"
        value="Title of the leave"
        onChange={handleChange}
      />
      
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        label="Details"
        defaultValue="Write about the leave"
      />
      
    </Box>
    </div>
  );
}

export default Leave;
