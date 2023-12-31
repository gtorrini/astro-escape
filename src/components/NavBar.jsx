import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const navAtts = {
  play: {
    label: 'Play the game',
    name: 'Play',
    route: '/play',
    title: 'Play the game'
  },
  about: {
    label: 'View info about this site',
    name: 'About',
    route: '/about',
    title: 'View info about this site'
  }
}

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='100%' sx={{backgroundColor: '#193154'}}>
        <Toolbar disableGutters>
          <Link key='home-link-reg' to='/' tabIndex={-1}>
            <Typography
              aria-label="Visit Astro Escape home page"
              key='home-text-reg'
              noWrap
              sx={{
                color: '#ffc107',
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Silkscreen',
                mr: 2,
                textShadow: '2px 2px #b71c1c',
                textDecoration: 'none',
              }}
              tabIndex={0}
              title="Astro Escape Home"
              variant='h4'
            >
              Astro {'\u2726'} Escape
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton
              aria-label="Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color='inherit'
              onClick={handleOpenNavMenu}
              size='large'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Object.entries(navAtts).map(([key, value]) => (
                <Link key={key + '-link-sm'} to={value.route} tabIndex={-1}>
                  <MenuItem 
                    key={key + '-menu-item'}
                    onClick={handleCloseNavMenu}
                    onKeyDown = {(e) => {  
                      if (e.key === 'Enter') {
                        window.location.href = value.route;
                      }
                    }}  
                  >
                    <Typography
                      aria-label={value.label}
                      sx={{ color: 'white', fontFamily: 'Silkscreen', textDecoration: 'none' }}
                      tabIndex={0}
                      title={value.title}
                    >
                      {value.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link key='home-link-sm' to='/' tabIndex={-1}>
            <Typography
              key='home-text-sm'
              noWrap
              sx={{
                color: '#ffc107',
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Silkscreen',
                mr: 2,
                textShadow: '2px 2px #b71c1c',
                textDecoration: 'none',
              }}
              variant='h5'
            >
              Astro {'\u2726'} Escape
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            {Object.entries(navAtts).map(([key, value]) => (
              <>
                <Link key={key + '-link-reg'} to={value.route} tabIndex={-1}>
                  <Button
                  aria-label={value.label}
                  key={key + 'button-reg'}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: 'white',
                    display: 'block',
                    fontFamily: 'Silkscreen',
                    my: 2,
                    textAlign: 'center',
                    textDecoration: 'none'
                  }}
                  tabIndex={0}
                  title={value.title}
                >
                  {value.name}
                </Button>
                </Link>
              </>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}