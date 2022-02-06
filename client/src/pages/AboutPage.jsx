// @mui material components
import { Box, Button, Card, Container, Grid, Icon, Stack, styled, Typography } from '@mui/material';
import Page from 'components/Page';
// Images
import bgImage from 'assets/images/bg-about-us.jpeg';
import Featuring from 'components/about/Featuring';
import Team from 'components/about/Team';
import Information from 'components/about/Information';

const RootStyle = styled(Page)(({ theme }) => ({
  marginTop: '-120px',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export default function AboutPage() {
  return (
    <>
      <RootStyle title="About Pollar">
        <Container>
          <Box
            minHeight="55vh"
            width="100%"
            sx={{
              // backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              //   `${linearGradient(
              //     rgba(gradients.dark.main, 0.6),
              //     rgba(gradients.dark.state, 0.6)
              //   )}, url(${bgImage})`,
              backgroundImage: 'url(' + bgImage + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginTop: '-10px',
              // marginLeft: '-1000px',

              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Container>
              <Grid
                container
                item
                xs={12}
                lg={8}
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                sx={{ mx: 'auto', textAlign: 'center' }}
              >
                <Typography
                  variant="h1"
                  color="white"
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down('md')]: {
                      fontSize: '500',
                    },
                  })}
                >
                  Welcome to Pollar
                </Typography>
                <Typography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                  We&apos;re constantly trying to express ourselves and actualize our dreams. If you
                  have the opportunity to play this game
                </Typography>
                {/* <Button color="default">create account</Button> */}
                <Typography variant="h6" color="white" mt={8} mb={1}>
                  Find us on
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography component="a" variant="body1" color="white" href="#" mr={3}>
                    <i className="fab fa-facebook" />
                  </Typography>
                  <Typography component="a" variant="body1" color="white" href="#" mr={3}>
                    <i className="fab fa-instagram" />
                  </Typography>
                  <Typography component="a" variant="body1" color="white" href="#" mr={3}>
                    <i className="fab fa-twitter" />
                  </Typography>
                  <Typography component="a" variant="body1" color="white" href="#">
                    <i className="fab fa-google-plus" />
                  </Typography>
                </Box>
              </Grid>
            </Container>
          </Box>
          <Card
            sx={{
              p: 2,
              mx: { xs: 2, lg: 3 },
              mt: -8,
              mb: 4,
              // boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <Information />
            <Team />
            <Featuring />
          </Card>
          {/* <Box pt={6} px={1} mt={6}>
            <DefaultFooter content={footerRoutes} />
          </Box> */}
        </Container>
      </RootStyle>
    </>
  );
}
