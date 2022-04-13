import { addActiveFile, setActiveEditorFile } from 'store/slices/files/files';
import { TreeViewNode } from 'types/Files';
import { AppDispatch, RootState } from 'types/Store';

export const openFile = (node: TreeViewNode) => (dispatch: AppDispatch, getState: () => RootState) => {
  const { id, children } = node;

  if (children) {
    return;
  }

  const {
    files: { activeFilesIds },
  } = getState();
  if (!activeFilesIds.includes(id)) {
    dispatch(addActiveFile(id));
  }

  dispatch(setActiveEditorFile(id));
};
