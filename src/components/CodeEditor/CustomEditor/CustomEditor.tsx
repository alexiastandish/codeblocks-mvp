import { useState, useCallback } from 'react';
import { debounce } from 'lodash';
// import Editor from '@monaco-editor/react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { updateFileCode } from 'store/slices/files/files';
import { UserFile } from 'types/Files';
import Loading from 'components/common/Loading/Loading';
// import Editor from './Editor';

type CustomEditorProps = {
  activeFile: UserFile;
};

const supportedExtensions: { [key: string]: string } = {
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  py: 'python',
  rb: 'ruby',
  java: 'java',
  go: 'go',
  html: 'html',
  php: 'php',
  css: 'css',
  json: 'json',
};

const CustomEditor = (props: CustomEditorProps) => {
  const {
    activeFile: { id, extension, code: originalCode },
  } = props;

  const [code, setCode] = useState(originalCode);
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const language = supportedExtensions[extension];

  const debouncedSave = useCallback(
    debounce((fileId: string, newCode: string) => {
      dispatch(updateFileCode({ fileId, newCode }));
    }, 1000),
    []
  );

  const onChange = (newCode = '') => {
    setCode(newCode);
    debouncedSave(id, newCode);
  };

  return (
    // <Editor
    //   width="100%"
    //   height="100%"
    //   language={language}
    //   theme={darkMode ? 'vs-dark' : 'light'}
    //   value={code}
    //   loading={<Loading />}
    //   onChange={onChange}
    // />
    // <Editor onChange={onChange} value={code} language={language} />
    <div>editor placeholder</div>
  );
};

export default CustomEditor;
