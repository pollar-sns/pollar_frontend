import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  Link,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Stack,
} from '@mui/material';
// layouts
// import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import AuthSocial from '../components/login/AuthSocial';
import RegisterForm from '../components/signup/RegisterForm';
import MobileHidden from '../components/common/MobileHidden';
import SelectInterests from '../components/signup/SelectInterests';

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
  maxWidth: 880,
  margin: 'auto',
  display: 'flex',
  // minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(5, 0),
}));

// ----------------------------------------------------------------------
const steps = ['기본정보', '관심분야 선택', '프로필 완성'];

const HorizontalLabelPositionBelowStepper = () => {
  return (
    <Box sx={{ width: '50%', pb: 5 }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default function SignupPage() {
  return (
    <RootStyle title="Signup">
      <Container>
        <ContentStyle>
          <Card
            sx={{
              px: 8,
              py: 8,
              backgroundColor: '#fffd',
              backdropFilter: 'saturate(200%) blur(50px)',
              boxShadow: '2px 2px 20px 10px rgba(0, 0, 0, 0.1)',
              overflow: 'visible',
            }}
          >
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <Box sx={{ mb: 5 }}>
                <Typography variant="h3" gutterBottom color="primary">
                  Sign Up
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    Already have an account?&nbsp;
                  </Typography>
                  <Typography variant="subtitle2">
                    <Link to="../login" component={RouterLink}>
                      Login
                    </Link>
                  </Typography>
                </Stack>
              </Box>

              <HorizontalLabelPositionBelowStepper />
            </Stack>
            {/* // todo 소셜 회원가입 */}
            {/* <AuthSocial /> */}

            <RegisterForm />

            <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
              By registering, I agree to Pollar&nbsp;
              <Link underline="always" sx={{ color: 'text.primary' }}>
                Terms of Service
              </Link>
              &nbsp;and&nbsp;
              <Link underline="always" sx={{ color: 'text.primary' }}>
                Privacy Policy
              </Link>
              .
            </Typography>

            {/* <SelectInterests /> */}
          </Card>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
