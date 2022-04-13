import { v4 as makeId } from 'uuid';

export const readFile = (file) => {
  console.log('file', file);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      // examples of name and webkitrelativepath
      // name = index.js
      // webkitrelativepath = src/index.js
      const { name, webkitRelativePath } = file;
      const id = makeId();
      const code = typeof reader.result === 'string' ? reader.result : '';
      const splitName = name.split('.');
      const extension = splitName[splitName.length - 1];
      resolve({
        id,
        name,
        code,
        extension,
        relativePath: webkitRelativePath,
      });
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
};
