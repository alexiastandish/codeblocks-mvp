import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import paths from '../../routes/paths';
import { useNavigate } from 'react-router-dom';

const StyledEditorBtn = styled(Button)(({ theme }) => ({ color: theme.commonColors.white }));

function EditorBtn() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(paths.codeEditor);
  };

  return <StyledEditorBtn onClick={onClick}>Code Editor</StyledEditorBtn>;
}
export default EditorBtn;
