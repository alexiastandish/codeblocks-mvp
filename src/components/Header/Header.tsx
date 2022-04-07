import EditorBtn from './EditorBtn';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import paths from 'routes/paths';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import DarkModeSwitch from './DarkModeSwitch';
import OpenWorkspaceBtn from './OpenWorkspaceBtn';

const StyledLink = styled(Link)(({ theme }) => ({ textDecoration: 'none', color: theme.commonColors.white }));

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          <StyledLink to={paths.home}>Home</StyledLink>
        </Typography>
        <DarkModeSwitch />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

const UnauthenticatedButtons = () => {
  return (
    <div>
      <SignInButton />
    </div>
  );
};

const AuthenticatedButtons = () => {
  let location = useLocation();

  return (
    <StyledAuthenticatedButtons>
      {location.pathname === paths.home ? <EditorBtn /> : <OpenWorkspaceBtn />}
      <SignOutButton />
    </StyledAuthenticatedButtons>
  );
};

const StyledAuthenticatedButtons = styled('div')({ display: 'flex' });
