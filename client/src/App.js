import { AppContainer } from "./components/Container.style.js";

import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { Page404 } from "./pages/Page404";
import { GlobalStyle } from "./components/GlobalStyles.style";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AppContainer>
  );
}
export default App;
