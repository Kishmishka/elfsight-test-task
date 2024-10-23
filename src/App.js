import { Pagination, ItemsGrid, useData, Header, AppState } from './components';
import styled, { createGlobalStyle } from 'styled-components';

export function App() {
  const { isFetching, isError } = useData();

  return (
    <Main>
      <GlobalStyle />
      <Header />
      <AppState />
      {!isFetching && !isError && (
        <>
          <ItemsGrid />
          <Pagination />
        </>
      )}
    </Main>
  );
}

const GlobalStyle = createGlobalStyle`
* {
	padding: 0px;
	margin: 0px;
	border: none;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
  padding: 0 calc(20px - (100vw - 100%)) 0 0; ;
  font-family: 'Roboto';
  background-color: #001832;
  @media (max-width: 500px) {
	padding: 0;
  }
}

/* Links */

a, a:link, a:visited  {
    text-decoration: none;
}

a:hover  {
    text-decoration: none;
}

/* Common */

aside, nav, footer, header, section, main {
	display: block;
}

h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
	font-weight: inherit;
}

ul, ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

img, svg {
	max-width: 100%;
	height: auto;
}

address {
  font-style: normal;
}

/* Form */

input, textarea, button, select {
	font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
}

input::-ms-clear {
	display: none;
}

button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
    outline: none;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

label {
	cursor: pointer;
}

legend {
	display: block;
}
`;

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0;
  max-width: 1150px;
  margin: 0 auto;
  @media (max-width: 350px) {
    padding: 0;
  }
  ${window.screen.width < 1200 && 'max-width: 95%'};
  ${window.screen.width < 930 && 'max-width: 85%'};
  ${window.screen.width < 600 && 'max-width: 90%'};
  @media (max-width: 350px) {
    padding: 0;
  }
`;
