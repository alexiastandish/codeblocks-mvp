import { EditorView } from '@codemirror/basic-setup';

export const updateEditor = (cb) => {
  let timer;
  return EditorView.updateListener.of((v) => {
    if (v.docChanged) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        const stringifiedValue = v.state.doc.text.join('');
        return cb(stringifiedValue);
      }, 500);
    }
  });
};
