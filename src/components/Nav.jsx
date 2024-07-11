import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#282c34' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white' }}>
              cinema
            </Typography>
            <Link to="/Add">
              <Button sx={{ color: 'white' }}>Add</Button>
            </Link>
            <Link to="/">
              <Button sx={{ color: 'white' }}>View</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box> 
      <img src="https://static.vecteezy.com/system/resources/thumbnails/012/657/549/small/illustration-negative-film-reel-roll-tapes-for-movie-cinema-video-logo-vector.jpg"alt="movie" width="100" height="100"></img>
    </>
  );
};

export default Nav;