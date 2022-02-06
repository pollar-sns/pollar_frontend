import Container from '@mui/material/Container';

import { Box } from '@mui/material';
import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// import { TabContext } from '@mui/lab';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { useParams } from 'react-router-dom';

// const blue = {
//   50: '#F0F7FF',
//   100: '#C2E0FF',
//   200: '#80BFFF',
//   300: '#66B2FF',
//   400: '#3399FF',
//   500: '#007FFF',
//   600: '#0072E5',
//   700: '#0059B2',
//   800: '#004C99',
//   900: '#003A75',
// };

const blue = {
  50: '#b6b6d7',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#FFFFFF',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};
const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${blue[500]};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: ${blue[200]};
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function PollsPage() {
  // 투표 목록의 type
  /**
   * 'interests': 관심분야
   * 'following': 팔로잉
   * 'recents': 최신순
   */
  const { type } = useParams();
  // Navbar를 통해서 들어온 경우에는 default로 첫번째 Tab에 focusing
  const [value, setValue] = useState(type ? type : 'interests');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabsList>
        <TabsPanel value={0}>First content</TabsPanel>
        <TabsPanel value={1}>Second content</TabsPanel>
        <TabsPanel value={2}>Third content</TabsPanel>
      </TabsUnstyled>
      {/* <Container>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{ width: '100%' }}
              >
                <Tab label="관심분야" value="interests" />
                <Tab label="팔로잉" value="following" />
                <Tab label="최신순" value="recents" />
              </TabList>
            </Box>
            <TabPanel value="interests">관심분야 투표 목록</TabPanel>
            <TabPanel value="following">팔로잉 투표 목록</TabPanel>
            <TabPanel value="recents">최신순 투표 목록</TabPanel>
          </TabContext>
        </Box>
      </Container> */}
    </>
  );
}
