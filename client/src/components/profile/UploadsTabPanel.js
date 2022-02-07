import PollDetailCard from 'components/polls/PollDetailCard';

import { Button, Container, Fab, Grid, Icon, Stack, Typography } from '@mui/material';
import Page from 'components/Page';
import PollVoteCard from 'components/polls/PollVoteCard';
import { Link } from 'react-router-dom';
import posts from '_mocks_/blog';
import GradAnimatedButton from 'components/common/GradAnimatedButton';
// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];
export default function UploadsTabPanel() {
  return (
    <>
      <Page title="VotesTabPanel">
        <Container>
          {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Blog
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="#"
              startIcon={<Icon icon={plusFill} />}
            >
              New Post
            </Button>
          </Stack> */}

          {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
            <BlogPostsSearch posts={POSTS} />
            <BlogPostsSort options={SORT_OPTIONS} />
          </Stack> */}

          {/* <Grid container spacing={3}>
            {posts.map((post, index) => ( */}
          {/* <PollDetailCard key={post.id} post={post} index={index} /> */}
          <PollDetailCard />
          <PollDetailCard />
          <PollDetailCard />
          <PollDetailCard />
          {/* <Fab
            href="/polls/create"
            variant="extended"
            color="secondary"
            sx={{ position: 'absolute', bottom: 0, right: 50 }}
          > */}
          <GradAnimatedButton
            href="/polls/create"
            sx={{ position: 'absolute', bottom: 0, right: 50 }}
          >
            <Typography variant="subtitle2">&nbsp;+&nbsp;Create New Poll&nbsp;&nbsp;</Typography>
          </GradAnimatedButton>
          {/* <AddIcon />
            <Typography variant="button">Create New Poll&nbsp;</Typography> */}
          {/* </Fab> */}
          {/* ))} */}
          {/* </Grid> */}
        </Container>
      </Page>
    </>
  );
}
