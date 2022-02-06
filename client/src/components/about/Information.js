/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Box, Card, Container, Grid } from '@mui/material';

// @mui material components

function Information() {
  return (
    <Box component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <Box mb={5}>
                  <Card
                    icon="public"
                    title="Fully integrated"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={5}>
                  <Card
                    icon="payments"
                    title="Payments functionality"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={{ xs: 5, md: 0 }}>
                  <Card
                    icon="apps"
                    title="Prebuilt components"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={{ xs: 5, md: 0 }}>
                  <Card
                    icon="3p"
                    title="Improved platform"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: 'auto', mt: { xs: 3, lg: 0 } }}>
            <Card
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Get insights on Search"
              description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
              action={{
                type: 'internal',
                route: 'pages/company/about-us',
                color: 'info',
                label: 'find out more',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Information;
