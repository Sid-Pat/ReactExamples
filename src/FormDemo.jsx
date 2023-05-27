import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

function FormDemo() {
    const [fname,setFname] = useState("");

    const [vol,setVol] = useState(50);

    const updateName = (e) =>{
        setFname(e.target.value);
    };

    const handleVol = (e,newVol) => {
        setVol(newVol)
    }

  return (
    <div>
        <h2>Hi {fname}!</h2>
        <TextField 
            id="outlined-basic" 
            placeholder="Elton" 
            label="First Name" 
            variant="outlined" 
            value={fname}
            onChange={updateName}
        />

    <h2>Volume : {vol}</h2>
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={vol} onChange={handleVol} />
        <VolumeUp />
      </Stack>
    </Box>
    </div>
  )
}

export default FormDemo