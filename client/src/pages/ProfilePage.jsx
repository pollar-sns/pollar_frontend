import Container from '@mui/material/Container';

import { Box, Card } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FeedTabs from '../components/profile/FeedTabs';
import Profile from '../components/profile/Profile';

const style = {
  p: 2,
  mx: { xs: 2, lg: 3 },
  mt: 8,
  mb: 4,
  backgroundColor: '#fff6',
  // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
  backdropFilter: 'saturate(200%) blur(30px)',
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  boxShadow: '2px 2px 20px 10px rgba(0, 0, 0, 0.1)',
  overflow: 'visible',
};

export default function ProfilePage() {
  const { userId } = useParams();
  // 사용자 계정 정보
  const [profileInfo, setProfileInfo] = useState();

  /* 사용자 계정 정보 API 호출 */
  // const getAccountInfo = async () => {
  // const response = await get
  // }

  useEffect(() => {
    console.log(userId);
    // 사용자 계정정보 요청
    // getAccountInfo();
  }, [userId]);

  return (
    <>
      <Box bgColor="white">
        <Container>
          <Card sx={style}>
            {/* isOwnerAccount - 사용자 본인의 프로필: true, 다른 사용자의 프로필: false */}
            <Profile profileInfo={profileInfo} isOwnerAccount={typeof userId === 'undefined'} />
            <Box bgColor="white" minHeight="60vh">
              <FeedTabs />
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}
