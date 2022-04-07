import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAuth0 } from '@auth0/auth0-react';
import paths from '../../routes/paths';

const StyledSignInButton = styled(Button)(({ theme }) => ({ color: theme.commonColors.white }));

function SignInButton() {
  const { loginWithRedirect } = useAuth0();

  const onSignIn = () => {
    loginWithRedirect({ appState: { returnTo: paths.codeEditor } });
  };
  return <StyledSignInButton onClick={onSignIn}>Sign In</StyledSignInButton>;
}
export default SignInButton;
