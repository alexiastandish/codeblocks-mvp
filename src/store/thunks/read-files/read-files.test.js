import { readFiles } from './read-files';
import { readFile } from 'utils/read-file';

jest.mock('utils/read-file');

describe('readFiles', () => {
  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should read two files', async () => {
    const userFiles = [
      {
        id: '1',
        name: 'index.js',
        code: 'console.log("hello world")',
        extension: 'js',
        relativePath: 'src/index.js',
      },
      {
        id: '2',
        name: 'main.js',
        code: 'console.log("hello world")',
        extension: 'js',
        relativePath: 'src/main.js',
      },
    ];
    readFile.mockReturnValueOnce(userFiles[0]);
    readFile.mockReturnValueOnce(userFiles[1]);
    await readFiles([1, 2])(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch.mock.calls[0][0].type).toEqual('files/readFiles/pending');
    expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/setFiles', payload: userFiles }]);
    expect(dispatch.mock.calls[2][0].type).toEqual('files/readFiles/fulfilled');
  });
});
