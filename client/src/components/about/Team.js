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

// @mui material components

// Images
import team1 from '../../assets/images/profile.jpeg';
import team2 from '../../assets/images/profile.jpeg';
import team3 from '../../assets/images/profile.jpeg';
import team4 from '../../assets/images/profile.jpeg';
import { Box, Card, Container, Grid, Typography } from '@mui/material';

function Team() {
  return (
    <Box
      component="section"
      variant="gradient"
      bgColor="#000"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6, backgroundColor: '#999' }}>
            <Typography variant="h3" color="white">
              The Executive Team
            </Typography>
            <Typography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Box mb={1}>
              <Card
              // image={team1}
              // name="Emma Roberts"
              // position={{ color: 'info', label: 'UI Designer' }}
              // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              >
                slkdf
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={1}>
              <Card
                image={team2}
                name="William Pearce"
                position={{ color: 'info', label: 'Boss' }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={{ xs: 1, lg: 0 }}>
              <Card
                image={team3}
                name="Ivana Flow"
                position={{ color: 'info', label: 'Athlete' }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={{ xs: 1, lg: 0 }}>
              <Card
                image={team4}
                name="Marquez Garcia"
                position={{ color: 'info', label: 'JS Developer' }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Team;
