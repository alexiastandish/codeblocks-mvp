import { styled } from '@mui/material/styles';
import { MouseEvent } from 'react';
import { UserFile } from 'types/Files';
import ExtensionIcon from '../ExtensionIcon/ExtensionIcon';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from 'store/hooks';
import { closeFile } from 'store/thunks/close-file/close-file';

type TabLabelProps = {
  activeFile: UserFile;
};

const TabLabel = (props: TabLabelProps) => {
  const dispatch = useAppDispatch();
  const {
    activeFile: { id, name, extension },
  } = props;

  const onClose = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(closeFile(id));
  };

  return (
    <StyledTabLabelContainer>
      <ExtensionIcon extension={extension} />
      <StyledFileName>{name}</StyledFileName>
      <CloseIcon onClick={onClose} sx={{ position: 'absolute', right: 0, color: (theme) => theme.font }} />
    </StyledTabLabelContainer>
  );
};

export default TabLabel;

const StyledTabLabelContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  texttransform: 'none',
});

const StyledFileName = styled('div')(({ theme }) => ({ padding: '0px 5px', color: theme.font }));
