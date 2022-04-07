import selectActiveFiles from './select-active-files';

it('should return only the active files', () => {
  const userFiles = [
    { id: '1', code: 'console.log("hello 1")', name: 'index1.js', relativePath: 'src/index1.js', extension: '.js' },
    { id: '2', code: 'console.log("hello 2")', name: 'index2.js', relativePath: 'src/index2.js', extension: '.js' },
    { id: '3', code: 'console.log("hello 3")', name: 'index3.js', relativePath: 'src/index3.js', extension: '.js' },
  ];

  const activeFilesIds = ['3', '1'];

  const state = {
    files: {
      userFiles,
      activeFilesIds,
    },
  };

  const expectedResult = [
    { id: '3', code: 'console.log("hello 3")', name: 'index3.js', relativePath: 'src/index3.js', extension: '.js' },
    { id: '1', code: 'console.log("hello 1")', name: 'index1.js', relativePath: 'src/index1.js', extension: '.js' },
  ];

  expect(selectActiveFiles(state)).toEqual(expectedResult);
});
