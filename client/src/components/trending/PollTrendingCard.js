import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Typography,
  Stack,
  ImageListItem,
  CardActionArea,
  Avatar,
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
} from '@mui/material';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShareIcon from '@mui/icons-material/Share';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { checkExpired, fToNow } from 'utils/formatTime';
import { useEffect, useState } from 'react';
import { requestPollLike, requestPollUnlike, getPollSelectionStatus } from 'services/api/PollApi';
import PollImageButton from 'components/common/PollImageButton';
import SharePollDialog from 'components/common/SharePollDialog';
import PollTextButton from 'components/common/PollTextButton';

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  // marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

export default function PollTrendingCard({ poll, isLoggedUser }) {
  const navigate = useNavigate();

  const {
    voteId,
    voteName,
    voteContent,
    voteType,
    voteCreateTime,
    voteExpirationTime,
    userAnonymousType,
    voteAnonymousType,
    voteCategoriesName,
    // 투표 선택지
    voteSelects,
    userVoteSelection,
    // 좋아요 누른 여부
    isUserLiked,
    // 투표했는지 여부
    isUserVoted,
    author,
    userProfilePhoto,
    voteReplyCount,
    voteParticipateCount,
    voteLikeCount,
  } = poll;

  // 로그인한 사용자가 해당 프로필의 '좋아요'목록에 대해서 '좋아요'를 눌렀는지 여부
  const [isLiked, setIsLiked] = useState(isUserLiked);
  // 공유하기 다이얼로그 창
  const [openShareDialog, setOpenShareDialog] = useState(false);
  // 해당 투표에 대해서 투표를 했는지 여부
  const [isVoted, setIsVoted] = useState(isUserVoted);
  // 로그인한 사용자가 해당 투표에 대해서 투표를 했을 경우, 투표 결과 데이터
  // (총 투표 수, 각 선택지별 투표 수)
  const [pollResult, setPollResult] = useState();
  // 현재 선택한 선택지 정보 (투표했을 경우)
  const [selectedItem, setSelectedItem] = useState(userVoteSelection);
  // 로그인 요청 다이얼로그
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  const POLL_INFO = [
    { number: voteReplyCount, icon: ChatOutlinedIcon },
    { number: voteParticipateCount, icon: HowToVoteIcon },
    { number: voteLikeCount, icon: FavoriteBorderIcon },
  ];

  const chipStyle = {
    fontSize: 10,
    // padding: -10,
    marginLeft: 1,
    overflow: 'inherit',
    '& .MuiChip-label': {
      overflow: 'initial',
    },
  };

  /* '자세히 보기'를 클릭 시 투표 상세페이지로 이동 */
  const handleCardClick = () => {
    navigate(`/poll/${voteId}`);
  };

  const handleUnloggedUserClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!isLoggedUser) {
      //// alert('로그인이 필요합니다. 로그인 화면으로 이동할까요?');
      // 로그인하지 않은 사용자에 대한 로그인 요청 다이얼로그
      setOpenLoginDialog(true);
    }
  };

  /* 로그인하지 않은 사용자에 대한 로그인 요청 다이얼로그 (확인 클릭 시) */
  const handleLoginDialogClose = () => {
    setOpenLoginDialog(false);
    navigate('/users/login');
  };

  /* '좋아요(좋아요해제)' 버튼 클릭시 */
  const handleToggleLikeClick = async () => {
    const result = isLiked ? await requestPollUnlike(voteId) : await requestPollLike(voteId);
    if (result === 'success') {
      setIsLiked((curr) => !curr);
    } else {
      // todo 에러처리
      alert('처리에 문제가 있었습니다. 다시 요청해주세요');
    }
  };

  /* 공유 버튼 클릭 시 */
  const handleShareClick = () => {
    setOpenShareDialog((curr) => !curr);
  };

  /* 작성자 프로필 클릭 시 */
  const handleProfileClick = () => {
    if (isLoggedUser) navigate(`/users/profile/${author}`);
  };

  /* 투표하기 */
  function handleVoteClick(state) {
    setIsVoted(state);
  }

  // /* 투표 취소 시 */
  // const handleRetrieveVote = async () => {
  //   // 투표 취소 정보 전송
  //   const result = await cancelPollVote(selectedItem);
  //   console.log(result);
  //   if (result === 'success') setSelectedItem(0);
  //   setIsVoted(false);
  //   // 결과값 초기화
  //   setPollResult();
  // };

  /* 사용자가 해당 투표에 대해서 투표를 했을 경우, 투표 결과를 디스플레이 */
  const getPollResult = async () => {
    const data = await getPollSelectionStatus(voteId);
    setPollResult(data);
  };

  useEffect(() => {
    if (isVoted) getPollResult();
    else setIsVoted(); // 투표 결과 숨김, 다시 투표가능한 상태
  }, [isVoted]);

  return (
    <>
      <Dialog
        open={openLoginDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="body1" textAlign="center">
            회원에게만 제공되는 서비스입니다. <br />
            로그인 화면으로 이동합니다.
          </Typography>
        </DialogTitle>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={handleLoginDialogClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>

      <Card
        onClick={handleUnloggedUserClick}
        sx={{
          paddingTop: 2,
          paddingX: 1,
          backgroundColor: '#826AF9',
          minHeight: 450,
          // backgroundColor: checkExpired(voteExpirationTime)
          //   ? pollBgCol.closedPoll
          //   : pollBgCol.default,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Stack direction="row" justifyContent="space-between">
                <Avatar
                  alt={userProfilePhoto}
                  src={userProfilePhoto}
                  onClick={handleProfileClick}
                />
                <Stack direction="row" spacing={0.5} justifyContent="center" mb={1}>
                  {voteCategoriesName.length > 0
                    ? voteCategoriesName.map((item, index) => (
                        <Chip
                          key={index}
                          label={item}
                          size="small"
                          sx={{
                            fontSize: 12,
                            overflow: 'inherit',
                            '& .MuiChip-label': {
                              overflow: 'initial',
                            },
                          }}
                          // color="info"
                          overflow="inherit"
                          variant="outlined"
                        />
                      ))
                    : null}
                </Stack>

                <Box>
                  <IconButton aria-label="share" onClick={handleShareClick}>
                    <ShareIcon sx={{ fontSize: '0.8em', color: '#cccc' }} />
                  </IconButton>
                  <IconButton aria-label="add to favorites" onClick={handleToggleLikeClick}>
                    {isLiked ? (
                      <FavoriteRoundedIcon sx={{ fontSize: '1em' }} color="error" />
                    ) : (
                      <FavoriteBorderRoundedIcon sx={{ fontSize: '1em' }} color="disabled" />
                    )}
                  </IconButton>
                </Box>
              </Stack>

              <CardActionArea onClick={handleCardClick}>
                <Stack direction="column" alignItems="baseline" spacing={0}>
                  <Typography variant="h5" component="div" textAlign="center" width="100%">
                    {voteName}
                  </Typography>
                  {/* 여기 부분은 다르게! 익명투표 여부만 표현하자. */}
                  <Typography variant="caption" color="#ccc" width="100%" mb={2}>
                    {voteAnonymousType ? '익명투표' : null}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ fontSize: 14, textAlign: 'left' }}>
                  {/* 투표내용... (최대 100자) */}
                  {voteContent}
                </Typography>
              </CardActionArea>
            </Grid>
            <Grid item xs={12} md={12}>
              {voteType ? (
                <Grid item xs={12} md={12}>
                  <Stack spacing={1}>
                    {voteSelects.map((item, index) => (
                      <PollTextButton
                        key={item.selectionId}
                        selection={item}
                        isVoted={isVoted || checkExpired(voteExpirationTime)}
                        setPollVotedState={handleVoteClick}
                        isSelectedVote={item.selectionId === userVoteSelection}
                        voteResultPercentage={
                          //? 총 투표수가 0인 경우 오류 방지
                          typeof pollResult !== 'undefined' && pollResult.total > 0
                            ? parseInt(
                                (pollResult.selectionCountsList[index] * 100) / pollResult.total
                              )
                            : 0
                        }
                      />
                    ))}
                  </Stack>
                </Grid>
              ) : (
                <>
                  <Grid container spacing={1}>
                    {voteSelects.map((item, index) => (
                      <Grid key={item.selectionId} item xs={6}>
                        <Card>
                          <PollImageButton
                            selection={item}
                            isVoted={isVoted || checkExpired(voteExpirationTime)}
                            setPollVotedState={handleVoteClick}
                            isSelectedVote={item.selectionId === userVoteSelection}
                            // 투표 마감 상태의 경우에는 투표하지 않았을 경우 결과 보여주지 않음
                            voteResultPercentage={
                              //? 총 투표수가 0인 경우 오류 방지
                              typeof pollResult !== 'undefined' && pollResult.total > 0
                                ? parseInt(
                                    (pollResult.selectionCountsList[index] * 100) / pollResult.total
                                  )
                                : 0
                            }
                          />
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>

          <Stack direction="row" justifyContent="space-between" sx={{ pt: 3 }}>
            <InfoStyle sx={{ width: '100%' }}>
              {POLL_INFO.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    ml: index === 0 ? 0 : 1.5,
                    color: '#ccc',
                  }}
                >
                  <Box component={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
                  <Typography variant="caption">{info.number}</Typography>
                </Box>
              ))}
            </InfoStyle>
            <Stack direction="row" alignItems="baseline">
              <Typography variant="caption" color="white" gutterBottom>
                {fToNow(voteExpirationTime).replace('후', '남음')}
              </Typography>
              {checkExpired(voteExpirationTime) ? (
                <Chip label="마감됨" color="default" size="small" sx={chipStyle} />
              ) : isUserVoted ? (
                <Chip label="투표완료" color="primary" size="small" sx={chipStyle} />
              ) : (
                <Chip label="투표가능" color="info" size="small" sx={chipStyle} />
              )}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <SharePollDialog pollId={voteId} openDialog={openShareDialog} />
    </>
  );
}
