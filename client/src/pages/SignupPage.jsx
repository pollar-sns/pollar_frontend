import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Container, Link, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import SignupWizard from 'components/signup/SignupWizard';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

// const SectionStyle = styled(Card)(({ theme }) => ({
//   width: '100%',
//   maxWidth: 464,
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   margin: theme.spacing(2, 0, 2, 2),
// }));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 880,
  margin: 'auto',
  display: 'flex',
  // minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(5, 0),
}));

// ----------------------------------------------------------------------

export default function SignupPage() {
  return (
    <RootStyle title="Signup">
      <Container>
        <ContentStyle>
          {/* <Card
            sx={{
              px: 8,
              py: 8,
              backgroundColor: '#fffd',
              backdropFilter: 'saturate(200%) blur(50px)',
              boxShadow: '2px 2px 20px 10px rgba(0, 0, 0, 0.1)',
              overflow: 'visible',
            }}
          >
            <Stack direction="row" justifyContent="space-between" spacing={2}> */}
          <SignupWizard />
          {/* </Stack>
          </Card> */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
