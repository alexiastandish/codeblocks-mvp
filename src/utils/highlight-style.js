import { tags as t, HighlightStyle, TagStyle, Tag } from '@codemirror/highlight';
import { theme } from 'theme/panel-theme';

const tagColorMap = new Map([
  [t.angleBracket, { color: theme.palette.red }],
  // [t.arithmeticOperator, { color: theme.palette.primary.light }],
  [t.atom, { color: 'white' }],
  // [t.bitwiseOperator, { color: theme.palette.primary.light }],
  // [
  //     t.blockComment,
  //     { color: theme.palette.text.disabled, fontStyle: 'italic' },
  // ],
  // [t.bool, { color: theme.palette.warning.main }],
  [t.brace, { color: theme.palette.yellow }],
  [t.compareOperator, { color: theme.palette.primary.light }],
  [t.content, { color: 'white' }],
  // [
  //     t.controlKeyword,
  //     { color: theme.palette.secondary.light, fontStyle: 'italic' },
  // ],
  // [t.definition(t.className), { color: theme.palette.warning.light }],
  // [t.definition(t.propertyName), { color: theme.palette.secondary.light }],
  // [t.definition(t.typeName), { color: theme.palette.secondary.light }],
  [t.definition(t.variableName), { color: theme.palette.blue }],
  // [
  //     t.definitionKeyword,
  //     { color: theme.palette.secondary.light, fontStyle: 'italic' },
  // ],
  // [t.definitionOperator, { color: theme.palette.primary.light }],
  // [t.derefOperator, { color: theme.palette.primary.light }],
  // [
  //     t.function(t.definition(t.variableName)),
  //     { color: theme.palette.info.light },
  // ],
  // [t.function(t.propertyName), { color: theme.palette.info.light }],
  // [t.function(t.variableName), { color: theme.palette.text.primary }],
  // [t.keyword, { color: theme.palette.secondary.light, fontStyle: 'italic' }],
  // [t.labelName, { color: theme.palette.text.primary }],
  // [
  //     t.lineComment,
  //     { color: theme.palette.text.disabled, fontStyle: 'italic' },
  // ],
  // [t.logicOperator, { color: theme.palette.primary.light }],
  // [t.modifier, { color: theme.palette.secondary.light }],
  // [t.null, { color: theme.palette.warning.main, fontStyle: 'italic' }],
  // [t.number, { color: theme.palette.warning.main }],
  // [t.operatorKeyword, { color: theme.palette.secondary.light }],
  // [t.paren, { color: theme.palette.primary.light }],
  [t.propertyName, { color: theme.palette.blue }],
  [t.punctuation, { color: theme.palette.primary.light }],
  // [t.regexp, { color: theme.palette.success.light }],
  // [t.self, { color: theme.palette.error.main }],
  // [t.separator, { color: theme.palette.primary.light }],
  // [t.special(t.string), { color: theme.palette.success.light }],
  // [t.squareBracket, { color: theme.palette.primary.light }],
  [t.string, { color: theme.palette.green }],
  [t.tagName, { color: theme.palette.red }],
  // [t.typeName, { color: theme.palette.success.light }],
  // [t.updateOperator, { color: '#0FF' }],
  // [t.variableName, { color: theme.palette.text.primary }],
  [t.className, { color: theme.palette.red }],
  [t.inserted, { color: theme.palette.red }],
]);

const specs = Array.from(tagColorMap.entries()).map(([tag, style]) => {
  return {
    tag,
    ...style,
  };
});

export const highlightStyle = HighlightStyle.define(specs);
