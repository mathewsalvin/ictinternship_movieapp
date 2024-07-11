import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Add = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '30ch', mb: 2 }, // mb for margin-bottom to space them downwards
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4, // Add margin-top to create space from the AppBar
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="movie-title"
        label="Movie Title"
        defaultValue=""
      />
      <TextField
        required
        id="category"
        label="Category"
        defaultValue=""
      />
      <TextField
        required
        id="director"
        label="Director"
        defaultValue=""
      />
      <TextField
        required
        id="release-year"
        label="Release Year"
        defaultValue=""
      />
      <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Stack spacing={2} direction="row">
          <Button variant="contained" sx={{ color: 'black', backgroundColor: '#FFFFFF' }}>Submit</Button>
          <Button variant="outlined" sx={{ color: 'black' }}>Cancel</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Add;
