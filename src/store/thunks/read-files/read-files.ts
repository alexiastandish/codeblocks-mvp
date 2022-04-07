import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFiles } from 'store/slices/files/files';
import { readFile } from 'utils/read-file';

export const readFiles = createAsyncThunk('files/readFiles', async (files: FileList, { dispatch }) => {
  const promises = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    promises.push(readFile(file));
  }

  const userFiles = await Promise.all(promises);
  dispatch(setFiles(userFiles));
});
