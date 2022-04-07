import { TreeView, TreeItem } from '@mui/lab';
import { styled } from '@mui/material/styles';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderIcon from '@mui/icons-material/Folder';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import selectTreeViewData from 'store/selectors/select-tree-view-data/select-tree-view-data';
import { TreeViewNode } from 'types/Files';
import ExtensionIcon from '../ExtensionIcon/ExtensionIcon';
import { openFile } from 'store/thunks/open-file/open-file';

function FileViewer() {
  const fileViewerData = useAppSelector(selectTreeViewData) as TreeViewNode;
  const dispatch = useAppDispatch();

  const onSelectNode = (node: TreeViewNode) => {
    dispatch(openFile(node));
  };

  const renderTree = (node: TreeViewNode) => {
    const { id, name, extension } = node;
    return (
      <TreeItem
        key={id}
        nodeId={id}
        label={name}
        onClick={() => onSelectNode(node)}
        endIcon={<ExtensionIcon extension={extension} />}
        sx={{ padding: '2px', color: (theme) => theme.font }}
      >
        {Array.isArray(node.children) ? node.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    );
  };

  if (!Object.keys(fileViewerData).length) {
    return <StyledEmptyMessage>no files</StyledEmptyMessage>;
  }

  return (
    <TreeView
      sx={{ padding: '0px 10px 10px', height: '100%', width: '100%' }}
      defaultCollapseIcon={<FolderOpenIcon />}
      defaultExpandIcon={<FolderIcon />}
    >
      {renderTree(fileViewerData)}
    </TreeView>
  );
}
export default FileViewer;

const StyledEmptyMessage = styled('div')(({ theme }) => ({ color: theme.font }));
