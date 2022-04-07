import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserFile } from 'types/Files';

export interface FilesState {
  userFiles: UserFile[];
  activeFilesIds: string[];
  activeEditorFileId?: string | null;
}

export const initialState: FilesState = {
  userFiles: [],
  activeFilesIds: [],
  activeEditorFileId: null,
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    // called when we upload a directory
    setFiles(state, action: PayloadAction<UserFile[]>) {
      state.userFiles = action.payload;
      state.activeFilesIds = [];
    },
    addActiveFile(state, action: PayloadAction<string>) {
      state.activeFilesIds.push(action.payload);
    },
    removeActiveFile(state, action: PayloadAction<string>) {
      state.activeFilesIds = state.activeFilesIds.filter((fileId) => fileId !== action.payload);
    },
    setActiveEditorFile(state, action: PayloadAction<string | null>) {
      state.activeEditorFileId = action.payload;
    },
    updateFileCode(state, action: PayloadAction<{ fileId: string; newCode: string }>) {
      const { fileId, newCode } = action.payload;
      const { userFiles } = state;
      let userFileToUpdate = userFiles.find((file) => file.id === fileId);

      if (userFileToUpdate) {
        userFileToUpdate.code = newCode;
      }
    },
  },
});

export const { setFiles, addActiveFile, removeActiveFile, setActiveEditorFile, updateFileCode } = filesSlice.actions;

const filesReduer = filesSlice.reducer;
export default filesReduer;
