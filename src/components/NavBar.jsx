import * as React from 'react';
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
      <Container maxWidth='xl' sx={{backgroundColor: '#193154'}}>
        <Toolbar disableGutters>
          <Typography
            aria-label="Visit home page"
            component='a'
            href="/"
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
                <MenuItem key={key} onClick={handleCloseNavMenu}>
                  <Typography
                    aria-label={value.label}
                    component='a'
                    href={value.route}
                    sx={{ color: 'white', fontFamily: 'Silkscreen', textDecoration: 'none' }}
                    tabIndex={0}
                    title={value.title}
                  >
                    {value.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            component='a'
            href="/"
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
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            {Object.entries(navAtts).map(([key, value]) => (
              <Button
                aria-label={value.label}
                component='a'
                href={value.route}
                key={key}
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
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}