import { styled } from '@mui/material/styles';
import { UserFile } from 'types/Files';
import CustomEditor from '../CustomEditor/CustomEditor';

type TabPanelProps = {
  activeFile: UserFile;
  activeEditorFileId: string | null;
};

function TabPanel(props: TabPanelProps) {
  const { activeFile, activeEditorFileId } = props;
  return (
    <StyledTabPanelContainer role="tabpanel" hidden={activeEditorFileId !== activeFile.id}>
      <CustomEditor activeFile={activeFile} />
    </StyledTabPanelContainer>
  );
}
export default TabPanel;

const StyledTabPanelContainer = styled('div')({ height: '100%' });
