import { createSelector } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const selectTreeViewData = (userFiles) => {
  const result = {};

  for (let i = 0; i < userFiles.length; i++) {
    const userFile = userFiles[i];
    const { name, relativePath, id, extension } = userFile;
    const paths = relativePath.split('/');
    let j = 0;
    let currentLevel = result;

    while (paths[j] !== name) {
      const path = paths[j];

      if (!Array.isArray(currentLevel) && !currentLevel.id) {
        currentLevel.id = uuidv4();
        currentLevel.name = path;
        currentLevel.children = [];
        currentLevel = currentLevel.children;
        j++;
        continue;
      }

      if (!Array.isArray(currentLevel) && currentLevel.children) {
        currentLevel = currentLevel.children;
        j++;
        continue;
      }

      const subfolder = currentLevel.find((child) => child.name === path);

      if (subfolder) {
        currentLevel = subfolder.children;
        j++;
      } else {
        currentLevel.push({});
        currentLevel = currentLevel[currentLevel.length - 1];
      }
    }

    const fileData = { id, name, extension };
    currentLevel.push(fileData);
  }

  return result;
};

export default createSelector((state) => state.files.userFiles, selectTreeViewData);
