import { openFile } from './open-file';

describe('openFile', () => {
  // mocking dispatch and getState
  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should not open a node if it has children', () => {
    const node = { id: '1', children: [{ id: '2' }] };
    openFile(node)(dispatch, getState);

    expect(dispatch).not.toHaveBeenCalled();
    expect(getState).not.toHaveBeenCalled();
  });

  it('should open the node if it is not already opened', () => {
    getState.mockReturnValue({ files: { activeFilesIds: [] } });
    const node = { id: '1' };
    openFile(node)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/addActiveFile', payload: '1' }]);
    expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/setActiveEditorFile', payload: '1' }]);
  });

  it('should open the node if it is already opened', () => {
    getState.mockReturnValue({ files: { activeFilesIds: ['1'] } });
    const node = { id: '1' };
    openFile(node)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setActiveEditorFile', payload: '1' }]);
  });
});
