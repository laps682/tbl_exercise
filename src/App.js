import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
 body {
   background: #afeeee;
   color: green;
   font-family: Arial, sans-serif;
 }
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
    </div>
  );
}

export default App;
