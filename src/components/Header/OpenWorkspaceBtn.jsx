import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRef } from 'react';
import { useAppDispatch } from 'store/hooks';
import { readFiles } from 'store/thunks/read-files/read-files';

const OpenWorkspaceStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const InputFile = styled('input')({ display: 'none' });

const OpenWorkspaceButton = () => {
  const directoryInputRef = useRef(null);
  const dispatch = useAppDispatch();

  const onClick = () => {
    directoryInputRef.current.click();
  };

  const onFilesUploaded = async () => {
    try {
      const files = directoryInputRef.current.files;
      await dispatch(readFiles(files));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <OpenWorkspaceStyledButton onClick={onClick}>Open Workspace</OpenWorkspaceStyledButton>
      <InputFile type="file" ref={directoryInputRef} directory="" webkitdirectory="" onChange={onFilesUploaded} />
    </div>
  );
};

export default OpenWorkspaceButton;
