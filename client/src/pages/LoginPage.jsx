import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import MobileHidden from '../components/common/MobileHidden';
import AuthSocial from '../components/login/AuthSocial';
import LoginForm from '../components/login/LoginForm';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  maxHeight: '100%',
  margin: 'auto',
  display: 'flex',
  // 스크롤 방지
  padding: theme.spacing(8, 0),
  minHeight: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <>
      <Page title="Login">
        {/* <MobileHidden width="mdDown">
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/static/illustrations/illustration_login.png" alt="login" />
          </SectionStyle>
        </MobileHidden> */}
        <Container maxWidth="sm">
          <ContentStyle>
            <Card
              sx={{
                px: 8,
                py: 8,
                backgroundColor: '#fffd',
                backdropFilter: 'saturate(200%) blur(30px)',
                boxShadow: '2px 2px 20px 10px rgba(0, 0, 0, 0.1)',
                overflow: 'visible',
              }}
            >
              <Stack sx={{ mb: 5 }}>
                <Typography variant="h3" gutterBottom color="primary">
                  Login
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Welcome back!</Typography>
              </Stack>
              <LoginForm />
              <AuthSocial />
              {/* <MobileHidden width="smUp"> */}
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?&nbsp;
                <Link variant="subtitle2" component={RouterLink} to="../signup">
                  Get started
                </Link>
              </Typography>
              {/* </MobileHidden> */}
            </Card>
          </ContentStyle>
        </Container>
        {/* </NavLayout> */}
      </Page>
    </>
  );
}
