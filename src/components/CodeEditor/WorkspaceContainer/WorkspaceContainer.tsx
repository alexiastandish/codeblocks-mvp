import { ChangeEvent } from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setActiveEditorFile } from 'store/slices/files/files';
import selectActiveFiles from 'store/selectors/select-active-files/select-active-files';
import TabPanel from '../TabPanel/TabPanel';
import TabLabel from '../TabPanel/TabLabel';
import { UserFile } from 'types/Files';
import { RootState } from 'types/Store';

const CodeEditorContainer = () => {
  const dispatch = useAppDispatch();
  const activeFiles = useAppSelector(selectActiveFiles);
  const activeEditorFileId = useAppSelector((state: RootState) => state.files.activeEditorFileId);

  const onTabClick = (event: ChangeEvent<{}>, tabPosition: number) => {
    const activeFile = activeFiles[tabPosition];

    if (activeFile.id !== activeEditorFileId) {
      dispatch(setActiveEditorFile(activeFile.id));
    }
  };

  const tabValue = activeEditorFileId
    ? activeFiles.findIndex((activeFile: UserFile) => activeFile.id === activeEditorFileId)
    : 0;

  if (!activeFiles.length) {
    return <EmptyMessage>Select a file</EmptyMessage>;
  }

  return (
    <CodeEditorContainerDiv>
      <AppBar position="static" color="default">
        <Tabs textColor="primary" indicatorColor="primary" variant="scrollable" value={tabValue} onChange={onTabClick}>
          {activeFiles.map((activeFile: UserFile) => {
            const { id } = activeFile;
            return <Tab key={id} label={<TabLabel activeFile={activeFile} />} />;
          })}
        </Tabs>
      </AppBar>
      {activeFiles.map((activeFile: UserFile) => {
        const { id } = activeFile;
        return <TabPanel key={id} activeFile={activeFile} activeEditorFileId={activeEditorFileId || ''} />;
      })}
    </CodeEditorContainerDiv>
  );
};

const CodeEditorContainerDiv = styled('div')({
  flex: 1,
  height: '100%',
  overflow: 'hidden',
});

const EmptyMessage = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.font,
}));

export default CodeEditorContainer;
