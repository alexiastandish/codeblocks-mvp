import { styled } from '@mui/material/styles';
import Layout from 'components/common/Layout/Layout';
import FileViewer from 'components/CodeEditor/FileViewer/FileViewer';
import WorkspaceContainer from 'components/CodeEditor/WorkspaceContainer/WorkspaceContainer';

const CodeEditorDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const FileViewerContainer = styled('div')({
  display: 'flex',
  flex: 1,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '300px',
  overflow: 'auto',
  borderRight: '1px dashed black',
});

const WorkspaceContainerDiv = styled('div')({
  flex: 3,
  height: '100%',
});

const CodeEditor = () => {
  return (
    <Layout>
      <CodeEditorDiv>
        <FileViewerContainer>
          <FileViewer />
        </FileViewerContainer>
        <WorkspaceContainerDiv>
          <WorkspaceContainer />
        </WorkspaceContainerDiv>
      </CodeEditorDiv>
    </Layout>
  );
};

export default CodeEditor;
