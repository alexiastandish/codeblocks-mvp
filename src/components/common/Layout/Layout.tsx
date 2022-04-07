import { PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';
import Header from 'components/Header/Header';

const StyledLayoutContainer = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledPage = styled('div')({
  height: '100%',
});

function Layout(props: PropsWithChildren<{}>) {
  return (
    <StyledLayoutContainer>
      <Header />
      <StyledPage>{props.children}</StyledPage>
    </StyledLayoutContainer>
  );
}
export default Layout;
