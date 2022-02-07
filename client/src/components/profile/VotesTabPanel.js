import { Button, Container, Grid, Icon, Stack, Typography } from '@mui/material';
import Page from 'components/Page';
import PollVoteCard from 'components/polls/PollVoteCard';
import { Link } from 'react-router-dom';
// import uploadedPoll from '_mocks_/uploadedPoll';
import plusFill from '@iconify/icons-eva/plus-fill';
import posts from '_mocks_/blog';
// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];
export default function VotesTabPanel() {
  return (
    <>
      <Page title="VotesTabPanel">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
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
          </Stack>

          {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
            <BlogPostsSearch posts={POSTS} />
            <BlogPostsSort options={SORT_OPTIONS} />
          </Stack> */}

          <Grid container spacing={3}>
            {posts.map((post, index) => (
              <PollVoteCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        </Container>
      </Page>
    </>
  );
}
