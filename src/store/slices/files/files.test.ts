import filesReduer, {
  initialState,
  setFiles,
  addActiveFile,
  removeActiveFile,
  setActiveEditorFile,
  updateFileCode,
} from './files';

describe('files slice', () => {
  it('should set user files when the action is setFiles', () => {
    const userFiles = [
      {
        id: '1',
        name: 'index.js',
        extension: '.js',
        relativePath: 'src/index.js',
        code: 'console.log("hello index.js")',
      },
      {
        id: '2',
        name: 'server.js',
        extension: '.js',
        relativePath: 'src/server.js',
        code: 'console.log("hello server.js")',
      },
    ];
    const expectedState = {
      ...initialState,
      userFiles,
      activeFilesIds: [],
    };
    expect(filesReduer(initialState, setFiles(userFiles))).toEqual(expectedState);
  });

  it('should add a new file id when the action is addActiveFile', () => {
    const expectedState = {
      ...initialState,
      activeFilesIds: ['1'],
    };
    expect(filesReduer(initialState, addActiveFile('1'))).toEqual(expectedState);
  });

  it('should remove a file when the file id is removeActiveFile', () => {
    const modifiedInitialState = {
      ...initialState,
      activeFilesIds: ['1'],
    };
    const expectedState = {
      ...modifiedInitialState,
      activeFilesIds: [],
    };
    expect(filesReduer(modifiedInitialState, removeActiveFile('1'))).toEqual(expectedState);
  });

  it('should set active file in editor the file id is passed to setActiveEditorFile', () => {
    const expectedState = {
      ...initialState,
      activeEditorFileId: '1',
    };
    expect(filesReduer(initialState, setActiveEditorFile('1'))).toEqual(expectedState);
  });

  it('should update a file when the file id is updateFileCode', () => {
    const payload = {
      fileId: '1',
      newCode: 'console.log("change")',
    };

    const modifiedInitialState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          code: 'console.log("hello world")',
          name: 'index.js',
          relativePath: 'src/index.js',
          extension: '.js',
        },
      ],
    };
    const expectedState = {
      ...modifiedInitialState,
      userFiles: [
        { id: '1', code: 'console.log("change")', name: 'index.js', relativePath: 'src/index.js', extension: '.js' },
      ],
    };

    expect(filesReduer(modifiedInitialState, updateFileCode(payload))).toEqual(expectedState);
  });

  it('should not update state when the file is not found', () => {
    const payload = {
      fileId: '2',
      newCode: 'console.log("change")',
    };

    const modifiedInitialState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          code: 'console.log("hello world")',
          name: 'index.js',
          relativePath: 'src/index.js',
          extension: '.js',
        },
      ],
    };

    expect(filesReduer(modifiedInitialState, updateFileCode(payload))).toEqual(modifiedInitialState);
  });
});
