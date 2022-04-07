import React, { useEffect, useState, useRef } from 'react';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
// import { ViewPlugin } from '@codemirror/view'
import { getLanguage } from './utils';
import { extensions } from './utils/extensions';
import { updateEditor } from './utils/update-editor';

export default function Editor({ value, language, onChange }) {
  const [view, setView] = useState('');
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current === null) return;

    const state = EditorState.create({
      extensions: [basicSetup, getLanguage(language), updateEditor(onChange), ...extensions],
      doc: value,
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    setView(view);

    return () => {
      view.destroy();
      setView(null);
    };
  }, [editorRef.current]);

  return <section ref={editorRef} />;
}
