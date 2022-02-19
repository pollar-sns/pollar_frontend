import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Container } from '@mui/material';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minWidth: '100%', //@eazae
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function NavLayout() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Navbar onOpenSidebar={() => setOpen(true)} isFullLayout={false} />
        {/* <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} /> */}
        <MainStyle>
          <Outlet />
          <Footer />
        </MainStyle>
      </Container>
    </RootStyle>
  );
}
