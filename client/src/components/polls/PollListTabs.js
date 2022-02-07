import Container from '@mui/material/Container';

import { Box, Grid, Paper, Typography } from '@mui/material';
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
import NeumorphicPaper from 'components/common/NeumorphicPaper';

const blue = {
  // 50: '#b6b6d7',
  50: '#ffffff',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#DFE3E8',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};
// width: 100%;
const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${blue[600]};
  cursor: pointer;
  width: 100%;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  padding: 8px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[700]};
    boxshadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// &:focus {
//   color: ${blue[200]};
//   border-radius: 3px;
//   outline: 2px solid ${blue[200]};
//   outline-offset: 2px;
// }

const TabsPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 50px;
  margin-top: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  margin-left: 16rem;
  margin-right: 16rem;
`;

export default function PollListTabs() {
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
      <Box>
        <TabsUnstyled defaultValue={0}>
          <TabsList sx={{ position: 'relative', mt: 3, zIndex: 999 }}>
            <Tab>관심분야</Tab>
            <Tab>팔로잉</Tab>
            <Tab>최신순</Tab>
          </TabsList>
          <NeumorphicPaper sx={{ mt: -3, mx: 10, p: 10, zIndex: 0, height: '70vh' }}>
            <TabsPanel value={0}>First content</TabsPanel>
            <TabsPanel value={1}>Second content</TabsPanel>
            <TabsPanel value={2}>Third content</TabsPanel>
          </NeumorphicPaper>
        </TabsUnstyled>
      </Box>
    </>
  );
}
