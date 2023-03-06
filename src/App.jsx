import React, { useState } from "react";

import { GlobalStyles } from "./components/shared/Global";
import { ContainerApp } from "./components/shared/ContainerApp";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./theme/theme";
import { socialData } from "./data/socialData";
import { FlexContainer } from "./components/shared/Container-flex";
import Header from "./components/header/Header";
import PlatformCards from "./components/cards/platform-cards/PlatformCards";

function App() {
  const [isDark, setIsDark] = useState(true);
  const theme = getTheme(isDark);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContainerApp>
          <Header />

          <PlatformCards />
        </ContainerApp>
      </ThemeProvider>
    </>
  );
}

export default App;
