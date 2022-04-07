import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAuth0 } from '@auth0/auth0-react';

const StyledSignOutButton = styled(Button)(({ theme }) => ({ color: theme.commonColors.white }));

function SignOutButton() {
  const { logout } = useAuth0();

  const onSignOut = () => {
    logout({ returnTo: window.location.origin });
  };
  return <StyledSignOutButton onClick={onSignOut}>Sign Out</StyledSignOutButton>;
}
export default SignOutButton;
