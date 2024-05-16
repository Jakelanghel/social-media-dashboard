import React, { useState } from "react";

import { GlobalStyles } from "./components/shared/Global";
import { ContainerApp } from "./components/shared/ContainerApp";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./theme/theme";
import { socialData } from "./data/socialData";

import Header from "./components/header/Header";
import PlatformCards from "./components/cards/platform-cards/PlatformCards";
import StatCards from "./components/cards/stat-card/StatCards";
// dsf
function App() {
  const [isDark, setIsDark] = useState(true);
  const theme = getTheme(isDark);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContainerApp>
          <Header
            data={socialData.platforms}
            isDark={isDark}
            setIsDark={setIsDark}
          />
          <PlatformCards data={socialData} />
          <StatCards data={socialData} />
        </ContainerApp>
      </ThemeProvider>
    </>
  );
}

export default App;
