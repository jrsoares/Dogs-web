import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');

* {
  box-sizing: border-box;
}

body {
  padding-top: 4rem;
  margin: 0px;
  color: #333;
  --type-first: Helvetica, Arial, sans-serif;
  --type-second: 'Spectral', Georgia;
  font-family: var(--type-first)
}

h1,
h2,
h3,
h4,
p {
  margin: 0px;
}

ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

img {
  display: block;
  max-width: 100%;
}

button,
input {
  display: block;
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  color: #333;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #333
}

`;
