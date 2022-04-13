import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    height: 100%
}
* {
    padding: 0;
    margin: 0
}
${(props) => props.styles}
`;

export default GlobalStyle;
