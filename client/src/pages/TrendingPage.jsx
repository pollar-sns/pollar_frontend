import { Container, Grid, Typography } from '@mui/material';
import { isLoggedState } from 'atoms/atoms';
import TrendingPollsSlider from 'components/trending/TrendingPollsSlider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getLoggedUserId } from 'utils/loggedUser';

export default function TrendingPage() {
  // 로그인된 사용자인지 여부
  const isLogged = useRecoilValue(isLoggedState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged && getLoggedUserId() === null) {
      console.log('로그인한 사용자. 투표 가능');
    }
  }, [isLogged]);

  return (
    <>
      <Container maxWidth="lg" sx={{ height: '70vh' }}>
        <Grid
          container
          item
          // xs={12}
          // lg={8}
          justifyContent="center"
          // alignItems="center"
          flexDirection="column"
          sx={{ mx: 'auto', textAlign: 'center' }}
        >
          <Typography
            variant="h2"
            color="primary"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down('md')]: {
                fontSize: '500',
              },
            })}
          >
            Trending
          </Typography>
          <Typography variant="body1" color="gray" opacity={0.8} mt={1} mb={3}>
            현재 Pollar에서 핫한 투표들! 로그인하고 참여해보세요
          </Typography>
          <TrendingPollsSlider />
        </Grid>
      </Container>
    </>
  );
}
