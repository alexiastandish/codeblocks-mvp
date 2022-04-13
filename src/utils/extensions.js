import { defaultHighlightStyle } from '@codemirror/highlight';
import { bracketMatching } from '@codemirror/matchbrackets';
import { highlightStyle } from './highlight-style';
import { EditorView } from '@codemirror/view';
import { lineNumbers } from '@codemirror/gutter';
import { oneDarkTheme } from '@codemirror/theme-one-dark';

export const extensions = [
  highlightStyle,
  oneDarkTheme,
  EditorView.lineWrapping,
  lineNumbers(),
  bracketMatching(),
  defaultHighlightStyle.fallback,
];
