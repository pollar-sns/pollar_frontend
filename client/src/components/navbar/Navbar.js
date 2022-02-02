import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Button, Typography } from '@mui/material';
// components
import MobileHidden from '../common/MobileHidden';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';

import { useRecoilState } from 'recoil';
import userState from '../../atoms/atoms';
import NavbarMenu from './NavbarMenu';
import { NavLogo } from './Logo';

import sidebarConfig from './SidebarConfig';
import NavSection from './NavSection';
import { Link } from 'react-router-dom';
// import Typography from '../../assets/theme/overrides/Typography';
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Navbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function Navbar({ onOpenSidebar }) {
  const [loggedUser, setLoggedUser] = useRecoilState(userState);
  console.log(loggedUser);
  return (
    <RootStyle>
      <ToolbarStyle>
        <MobileHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MobileHidden>

        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ backgroundColor: '#fff' }}>
              <NavLogo component={Link} to="/">
                {/* <NavIcon /> */}
                Pollar
              </NavLogo>
              {/* <Typography variant="h4" color="inherit">
                Pollar
              </Typography> */}
              <NavbarMenu />
              <NavSection navConfig={sidebarConfig} />

              <Searchbar />
              <Box sx={{ flexGrow: 1 }} />
              {loggedUser.userId ? (
                <>
                  <NotificationsPopover />
                  <AccountPopover />
                </>
              ) : (
                <>
                  {/* <Button component={Link} to="/users/login" variant="contained" color="primary">
                    Login
                  </Button> */}
                  <Button href="/login" variant="text" color="primary">
                    Login
                  </Button>
                  <Button href="/signup" variant="contained">
                    Sign Up
                  </Button>
                </>
              )}
            </Toolbar>
          </AppBar>
        </Box>
        {/* <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover />
        </Stack> */}
      </ToolbarStyle>
    </RootStyle>
  );
}
