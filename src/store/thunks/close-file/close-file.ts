import { removeActiveFile, setActiveEditorFile } from 'store/slices/files/files';
import { AppDispatch, RootState } from 'types/Store';

export const closeFile = (fileToCloseId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const {
    files: { activeFilesIds, activeEditorFileId },
  } = getState();

  const activeFilesLength = activeFilesIds.length;

  if (activeFilesLength === 1) {
    dispatch(setActiveEditorFile(null));
  } else if (activeFilesLength >= 2 && fileToCloseId === activeEditorFileId) {
    const newActiveFileId = getNewActiveFileId(activeFilesIds, activeFilesLength, fileToCloseId);

    dispatch(setActiveEditorFile(newActiveFileId));
  }

  dispatch(removeActiveFile(fileToCloseId));
};

const getNewActiveFileId = (activeFilesIds: string[], activeFilesLength: number, fileToCloseId: string) => {
  const fileToBeRemovedIndex = activeFilesIds.indexOf(fileToCloseId);

  // happens when the active file is at the right most place
  if (fileToBeRemovedIndex + 1 === activeFilesLength) {
    return activeFilesIds[fileToBeRemovedIndex - 1];
  }

  return activeFilesIds[fileToBeRemovedIndex + 1];
};
