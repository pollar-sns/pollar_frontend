import { Button, Card, Grid, Stack, Typography, Avatar, Container, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function UserDetailCard(props) {
  const { user } = props;

  return (
    <>
      {user ? (
        <Grid item xs={3} justify="center">
          <Card
            sx={{
              marginTop: 5,
              padding: 2,
              paddingTop: 3,
              width: 200,
              height: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Grid container spacing={1} justify="center" align="center">
              <Grid item xs={12} justify="center">
                <Avatar
                  src={user.userProfilePhoto}
                  alt="Profile Photo"
                  shadow="xl"
                  sx={{
                    width: '4rem',
                    height: '4rem',
                    border: 5,
                    borderColor: '#c5cae9',
                  }}
                />
              </Grid>
              <Grid item xs={12} justify="center">
                <Typography component="subtitle2" variant="overline" textAlign="center">
                  <p>{user.userNickname}</p>
                </Typography>
                <Typography component="caption" variant="caption" color="text.secondary">
                  <p>@{user.userId}</p>
                </Typography>
              </Grid>
              <Grid item xs={4} justify="center">
                <Stack>
                  <Typography component="span" color="primary">
                    {user.createVoteCount}
                  </Typography>
                  <Typography component="span" variant="caption" color="text.secondary">
                    게시글
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={4} justify="center">
                <Stack>
                  <Typography component="span" color="primary">
                    {user.participateVoteCount}
                  </Typography>
                  <Typography component="span" variant="caption" color="text.secondary">
                    투표수
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={4} justify="center">
                <Stack>
                  <Typography component="span" color="primary">
                    {user.followerCount}
                  </Typography>
                  <Typography component="span" variant="caption" color="text.secondary">
                    팔로워
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid justify="center" align="center">
              <Link component={RouterLink} to={`/users/profile/${user.userId}`}>
                <Button variant="contained" size="small" sx={{ boxShadow: 0, marginTop: 2 }}>
                  프로필 보기
                </Button>
              </Link>
            </Grid>
          </Card>
        </Grid>
      ) : null}
    </>
  );
}
