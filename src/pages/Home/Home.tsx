import React from 'react';
import Layout from 'components/common/Layout/Layout';
import { styled } from '@mui/material/styles';
import ProgrammingLanguagesList from 'components/Home/programming-languages-list';

const StyledHomeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const StyledWelcomeMessage = styled('div')(({ theme }) => ({
  padding: '15px',
  fontSize: '30px',
  color: theme.font,
}));

function Home() {
  return (
    <Layout>
      <StyledHomeContainer>
        <StyledWelcomeMessage>Welcome to the Code Editor App</StyledWelcomeMessage>
        <ProgrammingLanguagesList />
      </StyledHomeContainer>
    </Layout>
  );
}
export default Home;
